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
