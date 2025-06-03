import { PlayerModel } from "./components/PlayerModel";
import { CameraPlayer } from "../cameras/CameraPlayer";
import { PlayerStates } from './components/PlayerStates';
import { PlayerControls } from "./components/PlayerControls";
import { PlayerMovements } from "./components/PlayerMovements";

export class Player {
    constructor(classGame)
    {
        this.parent = classGame;

        this.PlayerModel = new PlayerModel(this);
        this.PlayerCamera = new CameraPlayer(this);
        this.PlayerStates = new PlayerStates();
        this.PlayerControls = new PlayerControls(this);
        this.PlayerMovements = new PlayerMovements(this);

        // Change Game's Camera
        this.parent.Camera = this.PlayerCamera;
    }

    update()
    {
        this.PlayerMovements.update?.();
        this.PlayerCamera.update();
    }
}