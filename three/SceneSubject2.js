import * as THREE from 'three'
import alphaTexture from '../assets/textures/stripes_gradient.jpg';

export default scene => {    
    const group = new THREE.Group();

    const speed = 0.02;
    const textureOffsetSpeed = 0.02;

    createSphereMesh(scene);
    //createPlaneMesh(scene);

    let uniforms = {
        colorB: {type: 'vec3', value: new THREE.Color(0xACB6E5)},
        colorA: {type: 'vec3', value: new THREE.Color(0x74ebd5)}
    }

    var attributes = {
        displacement: {
          type: 'f', // a float
          value: [] // an empty array
        }
      };

    function createPlaneMesh(scene,uniforms) {
        var geometry = new THREE.PlaneBufferGeometry( 2,2 );
        
        var material = new THREE.ShaderMaterial( {
            //uniforms: uniforms,
            attributes:     attributes,
            vertexShader: vertexShader(), //document.getElementById( 'vertexShader' ).textContent,
            fragmentShader: fragmentShader(), //document.getElementById( "fragmentShader" ).textContent,
            //wireframe: true,
        } );
    
        var mesh = new THREE.Mesh( geometry, material );

        // now populate the array of attributes
        var verts = mesh.geometry.vertices;

        var values = attributes.displacement.value;

        for (var v = 0; v < verts.length; v++) {
            values.push(Math.random() * 30);
        }
    
        group.add(mesh);
        scene.add(group);
    }

    function createSphereMesh(scene) {
        // Set up the sphere vars
        const RADIUS = 25;
        const SEGMENTS = 16;
        const RINGS = 16;

        // create the sphere's material
        const sphereMaterial = new THREE.MeshLambertMaterial({
            color: 0xCC0000,
            wireframe:false
        });

        // Create a new mesh with
        // sphere geometry - we will cover
        // the sphereMaterial next!
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(RADIUS,SEGMENTS,RINGS),sphereMaterial);

        // Move the Sphere back in Z so we
        // can see it.
        sphere.position.z = -50;

        // Finally, add the sphere to the scene.
        scene.add(sphere);
    }

    function vertexShader() {
        return `
            
            //varying vec3 vUv; 
            varying vec3 vNormal;

            void main() {
            
              // set the vNormal value with
              // the attribute value passed
              // in by Three.js
              vNormal = normal;
            
              gl_Position = projectionMatrix *
                            modelViewMatrix *
                            vec4(position, 1.0);
            }
        `
    }

    function fragmentShader() {
        return `
            //uniform vec3 colorA; 
            //uniform vec3 colorB; 
            //varying vec3 vUv;
            
            //void main() {gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);}

            varying vec3 vNormal;

            void main() {

            // calc the dot product and clamp
            // 0 -> 1 rather than -1 -> 1
            vec3 light = vec3(0.5, 0.2, 1.0);

            // ensure it's normalized
            light = normalize(light);

            // calculate the dot product of
            // the light to the vertex normal
            float dProd = max(0.0,
                                dot(vNormal, light));

            // feed into our frag colour
            gl_FragColor = vec4(dProd, // R
                                dProd, // G
                                dProd, // B
                                1.0);  // A

            }
        `
    }

    function update(time) {
        const angle = time*speed;

        //group.rotation.y = angle;

        //material.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed;

        uniforms.colorA[0] = Math.sin(angle)*255;
        //console.log('uniforms.colorA[0]',uniforms.colorA[0]);

        //subjectWireframe.material.color.setHSL( Math.sin(angle*2), 0.5, 0.5 );
        
        //const scale = (Math.sin(angle*8)+6.4)/5;
        //subjectWireframe.scale.set(scale, scale, scale)
    }

    return {
        update
    }
}