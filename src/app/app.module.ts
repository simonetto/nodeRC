import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ControlComponent } from './control/control.component';
import { PadsComponent } from './pads/pads.component';
import { FullScreenComponent } from './full-screen/full-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    ControlComponent,
    PadsComponent,
    FullScreenComponent
  ],
  imports: [
    DragDropModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
