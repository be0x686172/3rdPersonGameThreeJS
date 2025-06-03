import * as THREE from 'three';

export class Scene {
    constructor()
    {
        this.createScene();
    }

    createScene()
    {
        this.scene = new THREE.Scene();

        this.scene.background = new THREE.Color().setHex(0x112233);
    }
}