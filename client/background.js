

//three.js
var camera, scene, renderer, loadedSphere01, copy01, copy02, copy03;

var mouseX = 0,
	mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var clock = new THREE.Clock();

init();
// animate();

// var material01 = new THREE.MeshLambertMaterial({
// 	color: 0x157e7e,
// 	transparent: true,
// 	opacity: 1.0
// });

// var material02 = new THREE.MeshLambertMaterial({
// 	color: 0x157e7e,
// 	transparent: true,
// 	opacity: 1.0
// });
// var material03 = new THREE.MeshLambertMaterial({
// 	color: 0x157e7e,
// 	transparent: true,
// 	opacity: 1.0
// });


// var material04 = new THREE.MeshLambertMaterial({
// 	color: 0x157e7e,
// 	transparent: true,
// 	opacity: 1.0
// });


function init() {
	// basic scene
	renderer = new THREE.WebGLRenderer({
		alpha: true,
		antialias: true
	});
	var width = window.innerWidth;
	var height = window.innerHeight;

	renderer.setSize(width, height);

	//renderer.setClearColor(0x000000, 0);

	document.getElementById("webgl_wrapper").appendChild(renderer.domElement);

	scene = new THREE.Scene();



	// near = 100;
	//far = 2000;
	// fogColor = '#000000';
	//  scene.fog = new THREE.Fog(fogColor, near, far);
	//  scene.background = new THREE.Color(fogColor);

	camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
	camera.position.y = 0;
	camera.position.z = 120;




	// var manager = new THREE.LoadingManager();
	// //manager.onProgress = function(item, loaded, total) {

	// //console.log(item, loaded, total);

	// //};


	// var loader = new THREE.OBJLoader(manager);



	// loader.load('images/half_sphere.obj', function(loadedobject01) {



	// 	loadedobject01.traverse(function(child) {
	// 		if (child instanceof THREE.Mesh) {


	// 			child.material = material01;

	// 		}
	// 	});

	// 	copy01 = loadedobject01.clone();
	// 	copy02 = loadedobject01.clone();
	// 	copy03 = loadedobject01.clone();

	// 	copy01.traverse(function(child) {
	// 		if (child instanceof THREE.Mesh) {


	// 			child.material = material04;

	// 		}
	// 	});


	// 	copy02.traverse(function(child) {
	// 		if (child instanceof THREE.Mesh) {


	// 			child.material = material02;

	// 		}
	// 	});


	// 	copy03.traverse(function(child) {
	// 		if (child instanceof THREE.Mesh) {


	// 			child.material = material03;

	// 		}
	// 	});

	// 	loadedSphere01 = loadedobject01;

	// 	loadedobject01.scale.set(50, 50, 50);
	// 	loadedobject01.position.set(-40, 20, 0);
	// 	loadedobject01.rotation.z = -45;

	// 	copy01.scale.set(50, 50, 50);
	// 	copy01.position.set(-30, -30, 0);



	// 	copy02.scale.set(50, 50, 50);
	// 	copy02.position.set(40, 0, -20);
	// 	copy02.rotation.z = 45;

	// 	copy03.scale.set(50, 50, 50);
	// 	copy03.position.set(0, 0, -10);
	// 	copy03.rotation.x = -60;
		

	// 	scene.add(loadedobject01);

	// 	scene.add(copy01);
	// 	scene.add(copy02);
	// 	scene.add(copy03);

	// });

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
	
		if (copy01) copy01.rotation.z += 0.5 * delta;
	
		if (copy02) copy02.rotation.y += 0.3 * delta;
		if (copy02) copy02.rotation.z -= 0.4 * delta;
	
		if (copy03) copy03.rotation.y += 0.5 * delta;
		if (copy03) copy03.rotation.z -= 0.2 * delta;
	
	
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

