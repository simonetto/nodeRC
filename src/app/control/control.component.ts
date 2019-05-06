import { Component, Input } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import {CdkDragMove, CdkDragEnd} from '@angular/cdk/drag-drop';
import { Joystick } from '../joystick';
import { SocketService } from '../socket.service';

@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.css']
})
export class ControlComponent {
    @Input() side: string;
    @Input() joystick: Joystick;
    pressed = [false, false];

    constructor(private socketService: SocketService) {}

    onForward() {
        this.pressed[0] = true;
        this.joystick[this.side] = 1;
        this.socketService.send(this.joystick);
    }

    onBackward() {
        this.pressed[1] = true;
        this.joystick[this.side] = -1;
        this.socketService.send(this.joystick);
    }

    onRelease(button) {
        this.pressed[button] = false;

        if (!this.pressed[0] && !this.pressed[1]) {
            this.joystick[this.side] = 0;
            this.socketService.send(this.joystick);
        }
    }
}
