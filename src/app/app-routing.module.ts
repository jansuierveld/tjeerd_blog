import { ManosqueComponent } from './manosque/manosque.component';
import { OrangeComponent } from './orange/orange.component';
import { TournonComponent } from './tournon/tournon.component';
import { GrayComponent } from './gray/gray.component';
import { BeauneComponent } from './beaune/beaune.component';
import { LuxeuisComponent } from './luxeuis/luxeuis.component';
import { RemichComponent } from './remich/remich.component';
import { StvithComponent } from './stvith/stvith.component';
import { IntroComponent } from './intro/intro.component';
import { AppComponent } from './app.component';
import { VoorbereidingComponent } from './voorbereiding/voorbereiding.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NancyComponent } from './nancy/nancy.component';

const routes: Routes = [
  {
    path: 'intro', component: IntroComponent
  },
  {
    path: 'voorbereiding', component: VoorbereidingComponent
  },
  {
    path: 'stvith', component: StvithComponent
  },
  {
    path: 'remich', component: RemichComponent
  },
  {
    path: 'nancy', component: NancyComponent
  },
  {
    path: 'luxeuil', component: LuxeuisComponent
  },
  {
    path: 'beaune', component: BeauneComponent
  },
  {
    path: 'charentay', component: GrayComponent
  },
  {
    path: 'tournon', component: TournonComponent
  },
  {
    path: 'orange', component: OrangeComponent
  },
  {
    path: 'manosque' , component: ManosqueComponent
  },
  {
    path: '',   redirectTo: 'intro', pathMatch: 'full' }, // redirect to `first-component`
  {
    path: '**', component: AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
