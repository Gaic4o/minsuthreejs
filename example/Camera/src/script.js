
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


// Canvas 불러오기.
const canvas = document.querySelector('canvas.webgl')

// canvas 크기. 
const sizes = {
    width: 900,
    height: 700
}

// Cursor
const cursor = {
    x: 0,
    y: 0
}

// 마우스를 눌렀을 떄 cursor width height 효과.
window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 4.5
    cursor.y = - (event.clientY / sizes.height - 5.5)
})

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 3, 3, 3),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(105, sizes.width / sizes.height, 0.1, 100)

camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    controls.update()

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()