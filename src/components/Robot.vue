<template>
  <div class="threejs-container">

    <div ref="containerRef" class="canvas-container"></div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// Reactive state
const containerRef = ref(null)
const currentState = ref('Idle')
const expressionValues = ref([])
const expressions = ref([])

const states = ['Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing']
const emotes = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp']

// Three.js variables
let camera, scene, renderer, model, face, clock, mixer, actions, activeAction, previousAction
let animationId

const onStateChange = () => {
  fadeToAction(currentState.value, 0.5)
}

const playEmote = (emoteName) => {
  fadeToAction(emoteName, 0.2)

  const restoreState = () => {
    mixer.removeEventListener('finished', restoreState)
    fadeToAction(currentState.value, 0.2)
  }

  mixer.addEventListener('finished', restoreState)
}

const updateExpression = (index, value) => {
  if (face && face.morphTargetInfluences) {
    face.morphTargetInfluences[index] = parseFloat(value)
  }
}

const init = () => {
  if (!containerRef.value) return

  // Camera setup
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 100)
  camera.position.set(-5, 3, 10)
  camera.lookAt(0, 2, 0)

  // Scene setup
  scene = new THREE.Scene()
  // No background color or fog for transparency

  clock = new THREE.Clock()

  // Lights
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3)
  hemiLight.position.set(0, 20, 0)
  scene.add(hemiLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 3)
  dirLight.position.set(0, 20, 10)
  scene.add(dirLight)

  // No ground or grid, only robot

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setClearColor(0x000000, 0) // transparent
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  containerRef.value.appendChild(renderer.domElement)

  // Load model
  const loader = new GLTFLoader()
  loader.load('/models/gltf/RobotExpressive/RobotExpressive.glb', (gltf) => {
    model = gltf.scene
    scene.add(model)

    setupAnimations(model, gltf.animations)
  }, undefined, (error) => {
    console.error('Error loading model:', error)
    // Fallback: create a simple cube if model fails to load
    const geometry = new THREE.BoxGeometry(1, 2, 1)
    const material = new THREE.MeshPhongMaterial({ color: 0x0066cc })
    const cube = new THREE.Mesh(geometry, material)
    cube.position.y = 1
    scene.add(cube)
  })

  // Start animation loop
  animate()

  // Handle window resize
  window.addEventListener('resize', onWindowResize)
}

const setupAnimations = (model, animations) => {
  mixer = new THREE.AnimationMixer(model)
  actions = {}

  // Setup animations
  for (let i = 0; i < animations.length; i++) {
    const clip = animations[i]
    const action = mixer.clipAction(clip)
    actions[clip.name] = action

    if (emotes.indexOf(clip.name) >= 0 || states.indexOf(clip.name) >= 4) {
      action.clampWhenFinished = true
      action.loop = THREE.LoopOnce
    }
  }

  // Setup expressions
  face = model.getObjectByName('Head_4')
  if (face && face.morphTargetDictionary) {
    const expressionKeys = Object.keys(face.morphTargetDictionary)
    expressions.value = expressionKeys
    expressionValues.value = new Array(expressionKeys.length).fill(0)
  }

  // Start with idle animation, slowed down
  activeAction = actions['Idle']
  if (activeAction) {
    activeAction.setEffectiveTimeScale(0.5) // slower idle
    activeAction.play()
  }

  // Entrance animation: start off-screen left
  const startX = -10;
  const endX = -4;
  model.position.x = startX;

  // Animate entrance
  const duration = 1000; // ms
  const startTime = performance.now();
  function animateEntrance(now) {
    const elapsed = now - startTime;
    if (elapsed < duration) {
      // Ease out cubic
      const t = elapsed / duration;
      model.position.x = startX + (endX - startX) * (1 - Math.pow(1 - t, 3));
      requestAnimationFrame(animateEntrance);
    } else {
      model.position.x = endX;
    }
  }
  requestAnimationFrame(animateEntrance);

  // After a few seconds, play "Wave" emote
  setTimeout(() => {
    if (actions['Wave']) {
      fadeToAction('Wave', 0.2)
      // Restore Idle after emote
      const restoreState = () => {
        mixer.removeEventListener('finished', restoreState)
        fadeToAction('Idle', 0.2)
      }
      mixer.addEventListener('finished', restoreState)
    }
  }, 1000)
}

const fadeToAction = (name, duration) => {
  if (!actions[name]) return

  previousAction = activeAction
  activeAction = actions[name]

  if (previousAction !== activeAction) {
    previousAction.fadeOut(duration)
  }

  activeAction
    .reset()
    .setEffectiveTimeScale(1)
    .setEffectiveWeight(1)
    .fadeIn(duration)
    .play()
}

const animate = () => {
  animationId = requestAnimationFrame(animate)

  const dt = clock.getDelta()

  if (mixer) mixer.update(dt)

  renderer.render(scene, camera)
}

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

onMounted(() => {
  init()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }

  window.removeEventListener('resize', onWindowResize)

  if (renderer && containerRef.value) {
    containerRef.value.removeChild(renderer.domElement)
    renderer.dispose()
  }
})
</script>

<style scoped>
.threejs-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.canvas-container {
  width: 100%;
  height: 100%;
}

.info-panel {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  color: #222;
  z-index: 100;
  pointer-events: none;
}

.info-panel a {
  color: #2fa1d6;
  pointer-events: all;
}

.info-panel p {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2em;
  font-size: 14px;
}

.controls-panel {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 250px;
  max-height: 80vh;
  overflow-y: auto;
  z-index: 200;
}

.control-group {
  margin-bottom: 20px;
}

.control-group h3 {
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.button-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.emote-btn {
  padding: 8px 12px;
  background: #2fa1d6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.2s;
}

.emote-btn:hover {
  background: #267ba3;
}

.expression-controls {
  max-height: 300px;
  overflow-y: auto;
}

.slider-control {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  gap: 8px;
}

.slider-control label {
  min-width: 80px;
  font-size: 12px;
  color: #666;
}

.slider-control input[type="range"] {
  flex: 1;
}

.slider-control span {
  min-width: 40px;
  font-size: 12px;
  color: #666;
  text-align: right;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .controls-panel {
    position: relative;
    right: auto;
    top: auto;
    margin: 20px;
    max-height: none;
  }

  .info-panel {
    position: relative;
    transform: none;
    left: auto;
    top: auto;
    padding: 10px;
  }

  .canvas-container {
    height: 60vh;
  }
}
</style>