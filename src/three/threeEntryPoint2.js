import * as THREE from 'three';
//import SceneManager from './SceneManager';
import SceneSubject from './SceneSubject';
import SceneSubject2 from './SceneSubject2';
import GeneralLights from './GeneralLights';

export default container => {

    const clock = new THREE.Clock();
    const origin = new THREE.Vector3(0,0,0);

    const canvas = createCanvas(document, container);
    //const sceneManager = SceneManager(canvas);

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const mousePosition = {
        x: 0,
        y: 0
    }

    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    //const camera = buildSimpleCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene);
    //const sceneSubjects = createObjectWithShaderMaterial(scene);

    let canvasHalfWidth;
    let canvasHalfHeight;

    bindEventListeners();
    
    render();

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            GeneralLights(scene),
            SceneSubject2(scene)
        ];
        return sceneSubjects;
    }

    function createObjectWithShaderMaterial(scene) {
        var geometry = new THREE.PlaneBufferGeometry( 2, 2 );

        var uniforms = {
            u_time: { type: "f", value: 1.0 },
            u_resolution: { type: "v2", value: new THREE.Vector2() },
            u_mouse: { type: "v2", value: new THREE.Vector2() }
        };

        var material = new THREE.ShaderMaterial( {
            uniforms: uniforms,
            vertexShader: document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: document.getElementById( 'fragmentShader' ).textContent
        } );

        var mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        /*const sceneSubjects = [
            mesh
        ];
        return sceneSubjects;*/
    }

    function createCanvas(document, container) {
        const canvas = document.createElement('canvas');     
        container.appendChild(canvas);
        return canvas;
    }

    function bindEventListeners() {
        window.onresize = resizeCanvas;
        //window.onmousemove = mouseMove;
        resizeCanvas();	
    }

    function buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#000");

        return scene;
    }

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
        //const renderer = new THREE.WebGLRenderer({ canvas: canvas }); 
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        //const DPR = window.devicePixelRatio;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);
        
        renderer.gammaInput = true;
        renderer.gammaOutput = true; 

        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fieldOfView = 60;
        const nearPlane = 4;
        const farPlane = 200; 
        //const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        // Set some camera attributes.
        const WIDTH = 400;
        const HEIGHT = 300;
        const VIEW_ANGLE = 45;
        const ASPECT = WIDTH / HEIGHT;
        const NEAR = 0.1;
        const FAR = 10000;
        const camera =
            new THREE.PerspectiveCamera(
                VIEW_ANGLE,
                ASPECT,
                NEAR,
                FAR
            );

        camera.position.z = 40;

        return camera;
    }

    function buildSimpleCamera({ width, height }) {
        const camera = new THREE.Camera();
        camera.position.z = 1;
        return camera;
    }

    function resizeCanvas() {        
        canvas.style.width = '100%';
        canvas.style.height= '100%';
        
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        canvasHalfWidth = Math.round(canvas.offsetWidth/2);
        canvasHalfHeight = Math.round(canvas.offsetHeight/2);

        onWindowResize()
    }

    function onWindowResize() {
        const { width, height } = canvas;
        
        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width / height;
        //camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    }

    function updateCameraPositionRelativeToMouse() {
        camera.position.x += (  (mousePosition.x * 0.01) - camera.position.x ) * 0.01;
        camera.position.y += ( -(mousePosition.y * 0.01) - camera.position.y ) * 0.01;
        camera.lookAt(origin);
    }

    /*function mouseMove({screenX, screenY}) {
        sceneManager.onMouseMove(screenX-canvasHalfWidth, screenY-canvasHalfHeight);
        console.log('tep mousemove x y: ' + screenX-canvasHalfWidth + `,` + screenY-canvasHalfHeight)
    }*/

    function update() {
        const elapsedTime = clock.getElapsedTime();

        for(let i=0; i<sceneSubjects.length; i++) sceneSubjects[i].update(elapsedTime);

        updateCameraPositionRelativeToMouse();

        renderer.render(scene, camera);
    }

    function render(time) {
        requestAnimationFrame(render);
        /*sceneManager.*/update();
    }
}