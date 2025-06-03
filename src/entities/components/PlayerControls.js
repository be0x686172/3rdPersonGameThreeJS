export class PlayerControls {
    constructor(classPlayer)
    {
        this.parent = classPlayer;
        this.PlayerStates = this.parent.PlayerStates;

        this.createControlsMove();
    }

    createControlsMove()
    {
        document.addEventListener('keydown', (e) => {
            switch (e.key)
            {
                case 'z':
                    this.PlayerStates.forwardMove = true;
                    break; 
                case 's':
                    this.PlayerStates.backwardMove = true;
                    break; 
                case 'd':
                    this.PlayerStates.rightMove = true;
                    break; 
                case 'a':
                    this.PlayerStates.leftMove = true;  
                    break;   
                default:
                    break;
            }
        });
    
        document.addEventListener('keyup', (e) => {
            switch (e.key)
            {
                case 'z':
                    this.PlayerStates.forwardMove = false;
                    break; 
                case 's':
                    this.PlayerStates.backwardMove = false;
                    break; 
                case 'd':
                    this.PlayerStates.rightMove = false;
                    break; 
                case 'a':
                    this.PlayerStates.leftMove = false;   
                    break;  
                default:
                    break;
            }
        });
    }
}