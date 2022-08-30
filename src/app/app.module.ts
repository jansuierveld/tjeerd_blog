import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoorbereidingComponent } from './voorbereiding/voorbereiding.component';
import { IntroComponent } from './intro/intro.component';
import { StvithComponent } from './stvith/stvith.component';
import { RemichComponent } from './remich/remich.component';
import { NancyComponent } from './nancy/nancy.component';
import { LuxeuisComponent } from './luxeuis/luxeuis.component';
import { GrayComponent } from './gray/gray.component';
import { BeauneComponent } from './beaune/beaune.component';
import { CharentayComponent } from './charentay/charentay.component';
import { TournonComponent } from './tournon/tournon.component';

@NgModule({
  declarations: [
    AppComponent,
    VoorbereidingComponent,
    IntroComponent,
    StvithComponent,
    RemichComponent,
    NancyComponent,
    LuxeuisComponent,
    GrayComponent,
    BeauneComponent,
    CharentayComponent,
    TournonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
