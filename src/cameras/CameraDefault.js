import * as THREE from 'three';

export class CameraDefault {
    constructor()
    {
        this.createCamera();
    }

    createCamera()
    {
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );
    
        this.camera.position.y = 0.1;
    }
}