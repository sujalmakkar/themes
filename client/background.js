
//three.js
var camera, scene, renderer, loadedSphere01, copy01, copy02, copy03;

var mouseX = 0,
	mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var clock = new THREE.Clock();

init();

function init() {
	// basic scene
	renderer = new THREE.WebGLRenderer({
		alpha: true,
		antialias: true
	});
	var width = window.innerWidth;
	var height = window.innerHeight;

	renderer.setSize(width, height);


	document.getElementById("webgl_wrapper").appendChild(renderer.domElement);

	scene = new THREE.Scene();


	camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
	camera.position.y = 0;
	camera.position.z = 120;



	const geometry = new THREE.SphereGeometry( 15, 32, 16 );
	const material = new THREE.MeshLambertMaterial( { 
			color: 0x157e7e,
		transparent: true,
		opacity: 1.0
	} );
	const torusKnot = new THREE.Mesh( geometry, material );
	const torusKnot2 = new THREE.Mesh( geometry, material );
	const torusKnot3 = new THREE.Mesh( geometry, material );
	scene.add( torusKnot );
	scene.add( torusKnot2 );
	scene.add( torusKnot3 );
	torusKnot.scale.set(2,2,2)
	torusKnot2.scale.set(3,3,3)
	torusKnot3.scale.set(2.8,2.8,2.8)

	var dl02 = new THREE.DirectionalLight(0xffffff, 1.0);
	scene.add(dl02);
	dl02.position.set(40, 200, 200);

	animate();

	function animate() {
		setTimeout(function() {
	
			requestAnimationFrame(animate);
	
		}, 1000 / 25);
		render();
	}
	var m = 0
	function render() {
		m += 0.01
		var delta = clock.getDelta();
	
		if (torusKnot) torusKnot.position.y = 5 + Math.sin( m * 2 ) * 50;
		if (torusKnot) torusKnot.position.x = 10 + Math.sin( m * 1.7 ) * 40; 

		if (torusKnot2) torusKnot2.position.y = 8 + Math.sin( m * 1 ) * 71;
		if (torusKnot2) torusKnot2.position.x = -18 + Math.sin( m * 1.2 ) * 80; 

		if (torusKnot3) torusKnot3.position.y = 12 + Math.cos( m * 2.3 ) * 42;
		if (torusKnot3) torusKnot3.position.x = -10 + Math.cos( m * 1.8 ) * 71; 

	
		document.addEventListener('mousemove', onDocumentMouseMove, false);
		camera.position.x += (mouseX - camera.position.x) / 20;
		camera.position.y += (mouseY - camera.position.y) / 20;
	
		camera.lookAt(scene.position);
	
		renderer.render(scene, camera);
	}
	


} /*close init*/



function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
	mouseX = (event.clientX - windowHalfX) / 10;
	mouseY = (event.clientY - windowHalfY) / 10;
}

var windowWidth = window.innerWidth;
if (windowWidth > 540) {
	window.addEventListener('resize', onWindowResize, false);
}

