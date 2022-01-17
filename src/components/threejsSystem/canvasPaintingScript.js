import * as THREE from 'three';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import Thing from "../../resources/3dModels/windTurbineFinished.glb"


let mixer, clock;

function startThreeJS(){

    // Here we let all the three.js code go
    console.log("Initializing Three.js Code")
    const threeCanvas = document.getElementById("threeCanvas")
    const threeParams = { canvas: threeCanvas}

    let scene = new THREE.Scene();
    clock = new THREE.Clock();

    let camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);


    let renderer = new THREE.WebGLRenderer( threeParams );

    renderer.setSize(threeCanvas.clientWidth, threeCanvas.clientHeight);
//document.body.appendChild(renderer.domElement);

    const loader = new GLTFLoader();

    loader.load( Thing, function ( gltf ) {


        gltf.scene.traverse( function (child)
        {
            if ( child instanceof THREE.Mesh )
            {
                child.material = new THREE.MeshBasicMaterial({color:0xffffff, opacity:1})
            }
        });

        scene.add( gltf.scene );

        mixer = new THREE.AnimationMixer(gltf.scene)

            gltf.animations.forEach( ( clip ) => {

                mixer.clipAction( clip ).play();

            });


    }, undefined, function ( error ) {

        console.error( error );

    } );

    camera.position.z = 50;

    let render = function() {
        requestAnimationFrame(render);

        let delta = clock.getDelta();

        if ( mixer ) mixer.update( delta );

        renderer.render(scene, camera);
    };

    //renderer.setClearColor( 0xffffff, 1 );

    render();

}

export default startThreeJS;

