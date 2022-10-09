import { OnInit, AfterViewInit, AfterContentChecked, Component, ChangeDetectorRef, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { IntroService } from './intro.service';
import { Meta } from '@angular/platform-browser';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentChecked, OnDestroy{

  isIntro: boolean | undefined
  title = 'tjeerd_blog';
  subscription: Subscription;


  constructor(readonly introService: IntroService, private changeDetector: ChangeDetectorRef, private meta: Meta) {
    this.subscription = this.introService.getIntroObs().subscribe(mintro => {
      this.isIntro = mintro
    });
  }

  ngOnInit(): void {
    if (window.innerWidth >= 768) {
      this.introService.adSenseWidth$.next('normal');
    } else  {
      this.introService.adSenseWidth$.next('mobile');
    }
    this.meta.addTags([
      { name: 'description', content: 'Fietsen van Nederland naar het zuiden van frankrijk' },
      { name: 'keywords', content: 'Fietsen, Fietsvakantie, Racefiets, Zuid-Frankrijk, Moezel, Nederland, Fietsen naar frankrijk, Rivier, Saone, Seillans, Rhone, Fietsen langs de moezel, Vennbahn, Maas, Frankrijk, Fietsen in Lyon, Naar Frankrijk fietsen, Lange afstanden fietsen, Fietsen naar de zon, Goedkope fietsvakantie, Fietsroutes in frankrijk, Fietsroutes naar het zuiden, Fietsen langs het water, vlakke routes in frankrijk, fietsblog, suierveld, blog voor fietsen, over de vennbahn fietsen, GPX routes, GPX frankrijk, GPX vennbahn, fietsvakantie frankrijk, fietsvakantie nederland, fietsvakantie hotel tot hotel, fietsvakantie paklijst, fietsvakantie single' }  
    ]);  
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  pickStyle(){
    return this.isIntro ? '' : '#585A66';
  }

}
