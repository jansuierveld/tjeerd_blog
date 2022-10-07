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
      { name: 'description', content: 'This is an article about Angular Meta service' },
      { name: 'keywords', content: 'angular, javascript, typescript, meta, seo' }  
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
