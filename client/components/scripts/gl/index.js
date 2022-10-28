import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Blob from './Blob';
import gsap from 'gsap';

export default new class Gl {
  constructor() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xffffff, 0);

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 18);

    this.scene = new THREE.Scene();

    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.render();
  }

  render() {

    if (this.scene.children.length > 0) {
      document.body.classList.remove('loading');
    }

    // Update uniforms
    this.scene.children.forEach(mesh => {
      mesh.material.uniforms.uTime.value = this.clock.getElapsedTime();
    });

    this.renderer.render(this.scene, this.camera);
  }
}();