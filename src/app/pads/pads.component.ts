import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pads',
    templateUrl: './pads.component.html',
    styleUrls: ['./pads.component.css']
})
export class PadsComponent implements OnInit {
    pads = ['left', 'right'];

    constructor() { }

    ngOnInit() {
    }

}
