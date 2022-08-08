const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
const light = new THREE.AmbientLight(0x404040);


var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath("./asset/")

mtlLoader.load("r2-d2.mtl", function (material) {
    material.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(material);
    objLoader.setPath("./asset/")
    objLoader.load("17204_Thiele_tube_v1.obj", function (object) {
        scene.add(object);
        object.position.y -= 60
    })


})


/*
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
*/


//scene.add(cube);

camera.position.z = 5;

scene.add(light);

function animate() {
    requestAnimationFrame(animate);
    //cube.rotation.x += 0.01
   // cube.rotation.y += 0.01
    renderer.render(scene, camera);
}
animate();





