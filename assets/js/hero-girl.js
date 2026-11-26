/* Hero greeting animation:
   a girl walks in from the left (side view), stops in the middle, turns to face
   the front, waves and says hello, turns back and walks off to the right.
   After a short break she appears again and repeats. */
(function () {
  'use strict';

  var layer = document.getElementById('hero-girl');
  var walker = document.getElementById('girl-walker');
  var textEl = document.getElementById('girl-bubble-text');
  if (!layer || !walker || !textEl) return;

  var MESSAGE = "Hello! I'm Batul Surti \uD83D\uDC4B A Software & Application Developer. Let's build something great together!";
  var TYPE_MS = 38;
  var TURN_MS = 260;       // time spent in each stage of a turn (side > three-quarter > front)
  var HOLD_MS = 2000;      // pause after the message is finished
  var BREAK_MS = 2000;     // time she is away before appearing again

  var timers = [];
  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Walk duration comes from the CSS (--walk-ms) so speed and distance stay in sync
  function walkMs() {
    var d = parseFloat(getComputedStyle(walker).transitionDuration) || 2.3;
    return d * 1000;
  }

  function typeText(done) {
    var chars = Array.from(MESSAGE);
    var i = 0;
    textEl.textContent = '';
    layer.classList.add('is-typing');
    (function next() {
      if (i < chars.length) {
        textEl.textContent += chars[i++];
        later(next, TYPE_MS);
      } else {
        layer.classList.remove('is-typing');
        done();
      }
    })();
  }

  // Put her just off-screen on the left, ready to walk in
  function resetToStart() {
    layer.classList.remove('is-walking', 'is-talking', 'is-typing', 'is-three', 'is-front');
    textEl.textContent = '';
    walker.classList.add('no-transition');
    walker.classList.remove('at-center', 'exit-right');
    void walker.offsetWidth;
    walker.classList.remove('no-transition');
  }

  function play() {
    clearTimers();
    resetToStart();

    if (reduceMotion) {
      walker.classList.add('at-center');
      layer.classList.add('is-front', 'is-talking');
      textEl.textContent = MESSAGE;
      return;
    }

    var WALK = walkMs();

    // 1) Walk in from the left (side view)
    later(function () {
      layer.classList.add('is-walking');
      walker.classList.add('at-center');
    }, 300);

    // 2) Stop in the middle, then turn like a real person:
    //    side view -> three-quarter view -> facing the front, then wave and talk
    later(function () {
      layer.classList.remove('is-walking');
      layer.classList.add('is-three');
      later(function () {
        layer.classList.remove('is-three');
        layer.classList.add('is-front');
        later(function () {
          layer.classList.add('is-talking');
          typeText(function () {
            // 3) Pause, then turn back (front -> three-quarter -> side) and walk off right
            later(function () {
              layer.classList.remove('is-talking', 'is-front');
              layer.classList.add('is-three');
              later(function () {
                layer.classList.remove('is-three');
                layer.classList.add('is-walking');
                walker.classList.add('exit-right');

                // 4) Gone - after a short break she appears again from the left
                later(function () {
                  resetToStart();
                  later(play, BREAK_MS);
                }, WALK + 100);
              }, TURN_MS);
            }, HOLD_MS);
          });
        }, TURN_MS);
      }, TURN_MS);
    }, 300 + WALK + 50);
  }
  play();
})();
