import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

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
import { NavbarComponent } from './shared/navbar/navbar.component';
import { OrangeComponent } from './orange/orange.component';
import { ManosqueComponent } from './manosque/manosque.component';

import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { SeillansComponent } from './seillans/seillans.component';
import { AdsenseModule } from 'ng2-adsense';
import { BannerComponent } from './banner/banner.component';
import { AdsensechildComponent } from './shared/adsensechild/adsensechild.component';
import { RouterModule } from '@angular/router';


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
    TournonComponent,
    NavbarComponent,
    OrangeComponent,
    ManosqueComponent,
    AppComponent,
    NavbarComponent,
    SeillansComponent,
    BannerComponent,
    AdsensechildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGoogleAnalyticsModule.forRoot('G-B57ZZ6T4NP'),
    BrowserModule,
    HttpClientModule,
    NgxGoogleAnalyticsRouterModule,
    // shown passing optional global defaults
    AdsenseModule.forRoot({
      adClient: 'ca-pub-8239777228243047',
      adSlot: 5466555574
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
