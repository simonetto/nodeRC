import { Component } from '@angular/core';
import { Joystick } from './joystick';
import { SocketService } from './socket.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Rover Client';
    joystick;

    constructor(private socketService: SocketService) {
        this.joystick = new Joystick();
    }

    pads = {
        KeyW : {
            side : 'left',
            value : 1
        },
        KeyS : {
            side : 'left',
            value : -1
        },
        ArrowUp : {
            side : 'right',
            value : 1
        },
        ArrowDown : {
            side : 'right',
            value : -1
        }
    }

    keys = Object.keys(this.pads);

    onKeyUp(event: any) {
        const key = event.code;
        if (this.keys.indexOf(key) >= 0) {
            const side = this.pads[key].side;
            this.joystick[side] = 0;
            this.socketService.send(this.joystick);
        }
    }

    onKeyDown(event: any) {
        const key = event.code;
        if (this.keys.indexOf(key) >= 0) {
            const side = this.pads[key].side;
            const previous = this.joystick[side];
            const current = this.pads[key].value;

            if (previous !== current) {
                this.joystick[side] = current;
                this.socketService.send(this.joystick);
            }
        }
    }
}
