import './style.css'
import * as THREE from 'three' 
import gsap from 'gsap'

// Canvas 
const canvas = document.querySelector('canvas.webgl')

// 화면 
const Scene = new THREE.Scene()
 
// Base 
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff000 })
const mesh = new THREE.Mesh(geometry, material)
Scene.add(mesh)

// 크기
const sizes = {
    width: 900, 
    height: 700
}


// 카메라 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) 
camera.position.z = 3
Scene.add(camera)

// 렌더링.
const renderer = new THREE.WebGLRenderer({
    canvas: canvas 
})
renderer.setSize(sizes.width, sizes.height) 

// Animate 
gsap.to(mesh.position, { duration: 1, delay: 1, x : 2 })

const tick = () => {
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame 
    window.requestAnimationFrame(tick)
}
tick()