import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class PlayerModel {
    constructor(classPlayer)
    {
        this.parent = classPlayer;
        this.scene = this.parent.parent.Scene.scene;

        this.loader = new GLTFLoader();

        this.importModel();
    }

    importModel()
    {
        this.loader.load('/assets/models/player.glb', (gltf) => {
            this.model =  gltf.scene;

            this.model.position.z -= 5;
            this.model.scale.set(1, 1, 1);

            this.scene.add(this.model);
        });
    }
}