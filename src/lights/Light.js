import * as THREE from 'three';

export class Light {
    constructor(classGame)
    {
        this.parent = classGame;
        this.scene = this.parent.Scene.scene;

        this.createAmbientLight();
        this.createDirectionalLight();
    }

    createAmbientLight()
    {
        this.light = new THREE.AmbientLight(0xffffff, 0.5);
        
        this.scene.add(this.light);
    }

    createDirectionalLight()
    {
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        
        this.directionalLight.position.set(100, 100, 100);
        this.directionalLight.castShadow = true;
        
        this.scene.add(this.directionalLight);
    }
}