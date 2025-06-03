import { Scene } from "./scenes/Scene";
import { CameraDefault } from "./cameras/CameraDefault";
import { Renderer } from "./renderer/Renderer";
import { Map } from "./maps/Map";
import { Player } from "./entities/Player";
import { Light } from "./lights/Light";

export class Game {
    constructor()
    {
        this.Scene = new Scene();
        this.Camera = new CameraDefault();
        this.Renderer = new Renderer();
        this.Map = new Map(this);
        this.Player = new Player(this);
        this.Light = new Light(this);

        this.animate();
    }

    animate()
    {
        requestAnimationFrame(this.animate.bind(this));

        this.Renderer.renderer.render(this.Scene.scene, this.Camera.camera);

        this.Player.update?.();
    }
}