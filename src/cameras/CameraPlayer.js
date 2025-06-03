import * as THREE from 'three';

export class CameraPlayer {
    constructor(classPlayer)
    {
        this.parent = classPlayer;

        this.createCamera();
    }

    createCamera()
    {
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );
    
        this.camera.position.y = 1;
    }

    getDirection()
    {
        const cameraDirection = this.camera.getWorldDirection(new THREE.Vector3(0, 0, 0));
        return cameraDirection;
    }

    getDirectionRightSide()
    {
        const cameraDirection = this.camera.getWorldDirection(new THREE.Vector3(0, 0, 0));
        const cameraDirectionRightSide = new THREE.Vector3();

        cameraDirectionRightSide.crossVectors(new THREE.Vector3(0, 1, 0), cameraDirection);

        return cameraDirectionRightSide;
    }

    update()
    {
        if (this.parent.PlayerModel.model)
        {
            this.playerModel = this.parent.PlayerModel.model;
            
            this.camera.position.set(this.parent.PlayerModel.model.position.x + 1,
                                     this.parent.PlayerModel.model.position.y + 4,
                                     this.parent.PlayerModel.model.position.z + 8);
            
            this.camera.lookAt(this.parent.PlayerModel.model.position.x + 1,
                                     this.parent.PlayerModel.model.position.y + 4,
                                     this.parent.PlayerModel.model.position.z);
        }
    }
}