import * as THREE from 'three';
// import { Quotes } from '../vendors/quotes';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const geometry = new THREE.TorusKnotGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
let renderer: any;
scene.add(cube);
camera.position.z = 5;

const animate = () => {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
};

const resize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
};

export const createScene = (el: HTMLElement | null) => {
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el! });
	resize();
	animate();
};

window.addEventListener('resize', resize);
