import './style.css'
import * as THREE from 'three'

// 캔버스.
const canvas = document.querySelector('canvas.webgl')

// 화면 
const scene = new THREE.Scene()

// AxesHelper 
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)


// 그룹화해서 Mesh 를 그린다.
const group = new THREE.Group()
group.scale.y = 1
group.rotation.y = 2 
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.5, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube1.position.x = -1.5 
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1.4, 1),
    new THREE.MeshBasicMaterial({ color: 0x13333 })
)
cube2.position.x = 1
group.add(cube2) 


const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 3, 1),
    new THREE.MeshBasicMaterial({ color: 0xf4f4f4 })
)
cube3.position.x = 2.5 
group.add(cube3)


// 크기
const sizes = {
    width: 900,
    height: 600
}

// Camera 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) 
camera.position.z = 3 
scene.add(camera)

// Renderer 
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)