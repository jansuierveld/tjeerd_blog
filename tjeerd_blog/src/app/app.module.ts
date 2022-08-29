import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoorbereidingComponent } from './voorbereiding/voorbereiding.component';
import { IntroComponent } from './intro/intro.component';
import { StvithComponent } from './stvith/stvith.component';
import { RemichComponent } from './remich/remich.component';

@NgModule({
  declarations: [
    AppComponent,
    VoorbereidingComponent,
    IntroComponent,
    StvithComponent,
    RemichComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
