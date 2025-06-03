export class PlayerMovements {
    constructor(classPlayer)
    {
        this.parent = classPlayer;
        this.PlayerStates = this.parent.PlayerStates;
    }

    moveForward()
    {
        if (this.parent.PlayerModel.model)
        {
            const playerModel = this.parent.PlayerModel.model;

            if (this.PlayerStates.forwardMove)
            {
                const cameraDirection = this.parent.PlayerCamera.getDirection();

                playerModel.position.x += cameraDirection.x * this.PlayerStates.speedMove;
                playerModel.position.z += cameraDirection.z * this.PlayerStates.speedMove;
            }
            else if (this.PlayerStates.backwardMove)
            {
                const cameraDirection = this.parent.PlayerCamera.getDirection();

                playerModel.position.x += -cameraDirection.x * this.PlayerStates.speedMove;
                playerModel.position.z += -cameraDirection.z * this.PlayerStates.speedMove;
            }
        }
    }

    moveRight()
    {
        if (this.parent.PlayerModel.model)
        {
            const playerModel = this.parent.PlayerModel.model;

            if (this.PlayerStates.rightMove)
            {
                const cameraDirectionRightSide  = this.parent.PlayerCamera.getDirectionRightSide();

                playerModel.position.x += -cameraDirectionRightSide.x * this.PlayerStates.speedMove;
                playerModel.position.z += -cameraDirectionRightSide.z * this.PlayerStates.speedMove;
            }
            else if (this.PlayerStates.leftMove)
            {
                const cameraDirectionRightSide  = this.parent.PlayerCamera.getDirectionRightSide();

                playerModel.position.x += +cameraDirectionRightSide.x * this.PlayerStates.speedMove;
                playerModel.position.z += +cameraDirectionRightSide.z * this.PlayerStates.speedMove;
            }
        }
    }

    update()
    {
        this.moveForward();
        this.moveRight();
    }
}