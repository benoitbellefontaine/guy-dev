import * as THREE from 'three'

export default scene => {

    // create a point light
    const pointLight = new THREE.PointLight(0xFFFFFF);

    // set its position
    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;

    // add to the scene
    scene.add(pointLight);

    const lightIn = new THREE.PointLight("#4CAF50", 30);
    const lightOut = new THREE.PointLight("#2196F3", 10);
    lightOut.position.set(40,20,40);

    //scene.add(lightIn);
    //scene.add(lightOut);

    const rad = 80;

    function update(time) {
        const x = rad * Math.sin(time*0.2)
        lightOut.position.x = x;
    }

    return {
        update
    }
}