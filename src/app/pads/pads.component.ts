import { Component, OnInit } from '@angular/core';
import { Joystick } from '../joystick';

@Component({
    selector: 'app-pads',
    templateUrl: './pads.component.html',
    styleUrls: ['./pads.component.css']
})
export class PadsComponent implements OnInit {
    pads = ['left', 'right'];
    joystick;

    constructor() {
        this.joystick = new Joystick();
    }

    ngOnInit() {
    }

}
