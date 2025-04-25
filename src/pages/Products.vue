<template>
  <div class="products">
    <div ref="canvasContainer" class="scene-container"></div>
    <div class="controls">
      <button @click="changeColor('black')" class="color-btn black"></button>
      <button @click="changeColor('silver')" class="color-btn silver"></button>
      <button @click="changeColor('gold')" class="color-btn gold"></button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const canvasContainer = ref(null);
let scene, camera, renderer, controls, phone;

// Create basic phone geometry
const createPhone = () => {
  // Phone body
  const bodyGeometry = new THREE.BoxGeometry(1, 2, 0.1);
  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x000000,
    metalness: 0.9,
    roughness: 0.1,
    envMapIntensity: 0.9,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);

  // Screen
  const screenGeometry = new THREE.PlaneGeometry(0.9, 1.8);
  const screenMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x111111,
    metalness: 0,
    roughness: 0.1,
    envMapIntensity: 1.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  });
  const screen = new THREE.Mesh(screenGeometry, screenMaterial);
  screen.position.z = 0.051;

  // Camera bump
  const cameraBumpGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.02, 32);
  const cameraBumpMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x222222,
    metalness: 1,
    roughness: 0.1,
  });
  const cameraBump = new THREE.Mesh(cameraBumpGeometry, cameraBumpMaterial);
  cameraBump.rotation.x = Math.PI / 2;
  cameraBump.position.set(0.3, 0.8, -0.05);

  // Group all elements
  phone = new THREE.Group();
  phone.add(body);
  phone.add(screen);
  phone.add(cameraBump);

  return phone;
};

const init = () => {
  // Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  // Camera setup
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.outputEncoding = THREE.sRGBEncoding;
  canvasContainer.value.appendChild(renderer.domElement);

  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI / 1.5;
  controls.minPolarAngle = Math.PI / 3;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1);
  keyLight.position.set(1, 1, 2);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
  fillLight.position.set(-1, -1, -2);
  scene.add(fillLight);

  // Environment map for reflections
  const envMapLoader = new THREE.CubeTextureLoader();
  const envMap = envMapLoader.load([
    "/envmap/px.jpg",
    "/envmap/nx.jpg",
    "/envmap/py.jpg",
    "/envmap/ny.jpg",
    "/envmap/pz.jpg",
    "/envmap/nz.jpg",
  ]);
  scene.environment = envMap;

  // Add phone model
  phone = createPhone();
  scene.add(phone);

  // Handle window resize
  window.addEventListener("resize", onWindowResize, false);
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

const changeColor = (color) => {
  const colors = {
    black: 0x000000,
    silver: 0xc0c0c0,
    gold: 0xffd700,
  };

  phone.children[0].material.color.setHex(colors[color]);
};

onMounted(() => {
  init();
  animate();
});
</script>

<style scoped>
.products {
  position: relative;
  width: 100%;
  height: 100%;
}

.scene-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.controls {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.color-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.color-btn:hover {
  transform: scale(1.1);
}

.black {
  background: #000000;
}

.silver {
  background: #c0c0c0;
}

.gold {
  background: #ffd700;
}
</style>
