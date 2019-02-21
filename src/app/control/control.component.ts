import { Component, OnInit, Input } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import {CdkDragMove, CdkDragEnd} from '@angular/cdk/drag-drop';
import { Joystick } from '../joystick';
import { SocketService } from '../socket.service';

@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
    @Input() side: string;
    joystick;

    constructor(private socketService: SocketService) {
        this.joystick = new Joystick();
    }

    onDrop(event: CdkDragEnd) {
        this.joystick[this.side] = 0;
        this.socketService.send(this.joystick);
    }

    onDrag(event: CdkDragMove) {
        const previous = this.joystick[this.side];
        const current = event.delta.y;

        if (previous !== current) {
            this.joystick[this.side] = current;
            this.socketService.send(this.joystick);
            console.log(current)
        }
    }

    ngOnInit() {}

}
