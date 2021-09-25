import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    
    sizes.width = window.innerWidth 
    sizes.height = window.innerHeight 

    // update camera 
    camera.aspect = sizes.width / sizes.height 
    camera.updateProjectionMatrix() 

    // update renderer 
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.sin(window.devicePixelRatio, 2))
})


// Fullscreen 
window.addEventListener('dblclick', () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if (!fullscreenElement) {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen()
        }
        else if(canvas.webkitReqestFullscreen) {
            canvas.webkitRequestFullscreen()
        }
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen() 
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
    }
})


// Camera 
// Base camera 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100) 
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
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) 

const clock = new THREE.Clock() 

const tick = () => {
    const elapsedTime = clock.getElapsedTime() 
    controls.update() 
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()