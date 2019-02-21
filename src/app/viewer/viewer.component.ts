import { Component, OnInit, ElementRef} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-viewer',
    templateUrl: './viewer.component.html',
    styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
    uri = null;
    constructor(private sanitizer:DomSanitizer) {
        this.uri = this.sanitizer.bypassSecurityTrustResourceUrl(`ws://${document.location.hostname}:3001`);
    }

    ngOnInit() {
    }

}
