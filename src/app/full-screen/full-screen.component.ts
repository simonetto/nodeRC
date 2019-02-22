import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-full-screen',
    templateUrl: './full-screen.component.html',
    styleUrls: ['./full-screen.component.css']
})
export class FullScreenComponent implements OnInit {
    isFullScreen: boolean;
    constructor() {
        this.isFullScreen = true;
    }

    ngOnInit() {
    }

    onFullScreen(): void {
        this.isFullScreen = false;
        const elem = document.documentElement;
        const methodToBeInvoked = elem.requestFullscreen ||
        elem['webkitRequestFullScreen'] ||
        elem['mozRequestFullscreen'] ||
        elem['msRequestFullscreen'];
        if (methodToBeInvoked) {
            methodToBeInvoked.call(elem);
        }
    }

}
