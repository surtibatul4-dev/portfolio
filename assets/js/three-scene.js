/**
 * 3D Hero Scene for Batul Surti Portfolio
 * High-End Luxury Boutique Aesthetic: Smooth Pearlescent Rose-Gold Kinetic Sculpture & Celestial Rings
 * Built with Three.js
 *
 * Palette Harmonized:
 * - Rose Gold #C69A91
 * - Dusty Rose #C78D9B
 * - Deep Rose #AD697D
 * - Soft Warm White #FAF7F5
 * - Dusty Blush Pink #EAD5D5
 */

(function () {
  'use strict';

  function initThreeHero() {
    const container = document.getElementById('three-hero-container');
    if (!container || typeof THREE === 'undefined') return;

    // Check WebGL availability safely
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        console.warn('WebGL not supported, graceful fallback.');
        return;
      }
    } catch (e) {
      return;
    }

    // 1. Scene, Camera, High-Performance Antialiased Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 450;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.4;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Root Group for smooth floating animation & mouse interaction
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 2. Centerpiece: Smooth Pearlescent Rose-Gold Mobius / Torus Knot
    // Gentle silky curves with smooth specular luster
    const knotGeometry = new THREE.TorusKnotGeometry(1.22, 0.3, 160, 36, 2, 3);
    const knotMaterial = new THREE.MeshStandardMaterial({
      color: 0xC69A91,          // Rose Gold #C69A91
      roughness: 0.18,          // Satin-smooth finish
      metalness: 0.78,          // Warm metallic reflection
      emissive: 0xC78D9B,       // Soft Dusty Rose underglow
      emissiveIntensity: 0.28,
      flatShading: false        // Silky smooth curves
    });
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
    mainGroup.add(knotMesh);

    // 3. Inner Gemstone Core: Faceted Rose-Gold Jewel
    const innerGemGeo = new THREE.IcosahedronGeometry(0.68, 0);
    const innerGemMat = new THREE.MeshStandardMaterial({
      color: 0xC78D9B,          // Dusty Rose #C78D9B
      roughness: 0.12,
      metalness: 0.9,
      emissive: 0xAD697D,       // Deep Rose
      emissiveIntensity: 0.45,
      flatShading: true
    });
    const innerGem = new THREE.Mesh(innerGemGeo, innerGemMat);
    mainGroup.add(innerGem);

    // 4. Celestial Gyroscopic Rings
    // Ring 1: Rose Gold Orbit
    const ring1Geo = new THREE.TorusGeometry(2.32, 0.024, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xC69A91,
      roughness: 0.2,
      metalness: 0.92,
      emissive: 0xC69A91,
      emissiveIntensity: 0.55
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3.4;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    // Satellite Pearl on Ring 1
    const pearl1Geo = new THREE.SphereGeometry(0.075, 24, 24);
    const pearl1Mat = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      roughness: 0.1,
      metalness: 0.95,
      emissive: 0xEAD5D5,
      emissiveIntensity: 0.6
    });
    const satellite1 = new THREE.Mesh(pearl1Geo, pearl1Mat);
    ring1.add(satellite1);

    // Ring 2: Dusty Rose Counter-Orbit
    const ring2Geo = new THREE.TorusGeometry(2.05, 0.018, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xC78D9B,
      roughness: 0.24,
      metalness: 0.88,
      emissive: 0xC78D9B,
      emissiveIntensity: 0.45
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 3.6;
    ring2.rotation.y = -Math.PI / 5;
    mainGroup.add(ring2);

    // Satellite Pearl on Ring 2
    const pearl2Geo = new THREE.SphereGeometry(0.065, 24, 24);
    const pearl2Mat = new THREE.MeshStandardMaterial({
      color: 0xC69A91,
      roughness: 0.15,
      metalness: 0.9,
      emissive: 0xC69A91,
      emissiveIntensity: 0.5
    });
    const satellite2 = new THREE.Mesh(pearl2Geo, pearl2Mat);
    ring2.add(satellite2);

    // 5. Floating Ambient Sparkles & Stardust
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xC78D9B,
      size: 0.052,
      transparent: true,
      opacity: 0.75,
      blending: THREE.NormalBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Flattering Studio Lighting (Tailored for Light Background)
    // Soft Ambient Light so shadows remain luminous and clean
    const ambientLight = new THREE.AmbientLight(0xEAD5D5, 2.2);
    scene.add(ambientLight);

    // Warm Key Light (Rose Gold)
    const keyLight = new THREE.PointLight(0xFFFAF6, 3.2, 22);
    keyLight.position.set(4, 3.5, 4);
    scene.add(keyLight);

    // Soft Dusty Rose Fill Light
    const fillLight = new THREE.PointLight(0xC78D9B, 2.6, 20);
    fillLight.position.set(-4, -3, 3);
    scene.add(fillLight);

    // Specular Accent Light
    const accentLight = new THREE.PointLight(0xC69A91, 2.2, 18);
    accentLight.position.set(0, 4.5, -3);
    scene.add(accentLight);

    // Interactive Cursor-following Light
    const cursorLight = new THREE.PointLight(0xC69A91, 1.8, 14);
    cursorLight.position.set(0, 0, 4.5);
    scene.add(cursorLight);

    // 7. Interactive Controls & Physics
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let dragVelocityX = 0;
    let dragVelocityY = 0;

    function onPointerMove(e) {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        dragVelocityX = deltaX * 0.007;
        dragVelocityY = deltaY * 0.007;

        mainGroup.rotation.y += dragVelocityX;
        mainGroup.rotation.x += dragVelocityY;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      } else {
        targetX = x * 0.4;
        targetY = y * 0.3;
      }

      cursorLight.position.x = x * 3.2;
      cursorLight.position.y = y * 3.2;
    }

    function onPointerDown(e) {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      container.style.cursor = 'grabbing';
    }

    function onPointerUp() {
      isDragging = false;
      container.style.cursor = 'grab';
    }

    container.style.cursor = 'grab';
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);

    container.addEventListener('touchmove', function (e) {
      if (e.touches.length === 1) {
        onPointerMove(e.touches[0]);
      }
    }, { passive: true });

    function onWindowResize() {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    }

    window.addEventListener('resize', onWindowResize);

    // 8. Fluid Animation Loop
    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!isDragging) {
        currentX += (targetX - currentX) * 0.045;
        currentY += (targetY - currentY) * 0.045;

        // Graceful continuous organic rotation
        mainGroup.rotation.y += 0.007;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.4) * 0.16 + currentY;
        mainGroup.rotation.z = Math.cos(elapsedTime * 0.3) * 0.1 + currentX * 0.35;

        // Gentle floating breathing levitation
        mainGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.15;
      } else {
        dragVelocityX *= 0.94;
        dragVelocityY *= 0.94;
        mainGroup.rotation.y += dragVelocityX;
        mainGroup.rotation.x += dragVelocityY;
      }

      // Orbital Rings Rotation
      ring1.rotation.z += 0.008;
      ring2.rotation.z -= 0.007;

      // Orbit satellite pearls
      satellite1.position.x = Math.cos(elapsedTime * 1.1) * 2.32;
      satellite1.position.y = Math.sin(elapsedTime * 1.1) * 2.32;

      satellite2.position.x = Math.cos(-elapsedTime * 0.95) * 2.05;
      satellite2.position.y = Math.sin(-elapsedTime * 0.95) * 2.05;

      // Inner Core Counter-Rotation & Gentle Breathing Pulse
      innerGem.rotation.x -= 0.014;
      innerGem.rotation.y -= 0.016;
      const pulseScale = 1.0 + Math.sin(elapsedTime * 2.2) * 0.07;
      innerGem.scale.set(pulseScale, pulseScale, pulseScale);

      // Celestial Stardust Slow Drift
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = Math.sin(elapsedTime * 0.1) * 0.04;

      // Floating Dynamic Light Orbits
      keyLight.position.x = Math.cos(elapsedTime * 0.75) * 4.2;
      keyLight.position.z = Math.sin(elapsedTime * 0.75) * 4.2;
      keyLight.position.y = 2.8 + Math.sin(elapsedTime * 1.0) * 1.0;

      fillLight.position.x = Math.cos(elapsedTime * 0.75 + Math.PI) * 4.0;
      fillLight.position.z = Math.sin(elapsedTime * 0.75 + Math.PI) * 4.0;

      renderer.render(scene, camera);
    }

    animate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThreeHero);
  } else {
    initThreeHero();
  }
})();
