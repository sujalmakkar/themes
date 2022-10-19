import Gl from './gl';
import Blob from './gl/Blob';
import * as dat from 'dat.gui';

// import gsap from 'gsap';

export default class App {
  constructor() {
    this.blobs = [];
    this.addBlobs();

    // Main animation tl
    // this.tl = gsap.timeline({
    //   delay: 0.25,
    // });

    // this.tl
    //   .add(this.article())
    //   .add(this.animBlobs(), '-=1.5');
  }

  addBlobs() {
    // size, speed, color, freq, density, strength, offset
    // const blob1 = new Blob(1.75, 0.3, 0.5, 0.3, 0.12, Math.PI * 1);  

    var options = {
      velx: 0,
      vely: 0,
      camera: {
        speed: 0.0001
      },
      stop: function () {
        this.velx = 0;
        this.vely = 0;
      },
      reset: function () {
        this.velx = 0.1;
        this.vely = 0.1;
        camera.position.z = 75;
        camera.position.x = 0;
        camera.position.y = 0;
        cube.scale.x = 1;
        cube.scale.y = 1;
        cube.scale.z = 1;
        cube.material.wireframe = true;
      }
    };

    var gui = new dat.GUI();

    var cam = gui.addFolder('Camera');
    cam.add(options.camera, 'speed', 0, 0.0010).listen();
    cam.add(camera.position, 'y', 0, 100).listen();
    cam.open();

    const blob2 = new Blob(6.0, 0.15, .4, .2, 0.3, Math.PI * 1);
    // const blob3 = new Blob(0.8, 0.5, 1, 4, 0.05, Math.PI * 0.5);    

    // blob1.position.set(-8.5, 3.25, 2);
    blob2.position.set(11, -3, -10);
    // blob3.position.set(-1, -4, 4);

    // blob1.rotation.set(-0.4, 0, 0.5);
    blob2.rotation.set(0.4, 1.0, -0.4);
    // blob3.rotation.set(0, 0, 0);

    // this.blobs = [ blob2 ];

    Gl.scene.add(blob2);
    var render = function () {

      requestAnimationFrame(render);

      var timer = Date.now() * options.camera.speed;
      camera.position.x = Math.cos(timer) * 100;
      camera.position.z = Math.sin(timer) * 100;
      camera.lookAt(scene.position);
      camera.updateMatrixWorld();

      cube.rotation.x += options.velx;
      cube.rotation.y += options.vely;

      renderer.render(scene, camera);
    };
    render();
  }
}