import { OnInit, AfterViewInit, AfterContentChecked, Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IntroService } from './intro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentChecked, OnDestroy{

  isIntro: boolean | undefined
  title = 'tjeerd_blog';
  subscription: Subscription;

  constructor(readonly introService: IntroService, private changeDetector: ChangeDetectorRef) {
    this.subscription = this.introService.getIntroObs().subscribe(mintro => {
      console.log(mintro);
      this.isIntro = mintro
    });
  }

  ngOnInit(): void {
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
