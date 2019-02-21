import { Injectable } from '@angular/core';
import { Observer, Observable, of } from 'rxjs';
import { Joystick } from './joystick';
import { Event } from './event';

import * as socketIo from 'socket.io-client';

const SERVER_URL = `http://${document.location.hostname}:3000`;

@Injectable({
  providedIn: 'root'
})
export class SocketService {
    private socket;

    public initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }

    public send(message: Joystick): void {
        this.socket.emit('joystick', message);
    }

    public onMessage(): Observable<Joystick> {
        return new Observable<Joystick>(observer => {
            this.socket.on('joystick', (data: Joystick) => observer.next(data));
        });
    }

    public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }

    constructor() {
        this.initSocket();
    }
}
