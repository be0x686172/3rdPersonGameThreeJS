import * as THREE from 'three';

export class Map {
    constructor(classGame)
    {
        this.parent = classGame;
        this.scene = this.parent.Scene.scene;

        this.createFloor();
    }

    createFloor()
    {
        const geometry = new THREE.PlaneGeometry(100, 100);
        const material = new THREE.MeshBasicMaterial({color: 0xffffff});
        const plane = new THREE.Mesh(geometry, material);

        plane.rotateX(-Math.PI / 2);
        plane.position.z -= 1;

        this.scene.add(plane);
    }
}