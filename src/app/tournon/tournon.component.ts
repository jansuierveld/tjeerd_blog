import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IntroService } from '../intro.service';

@Component({
  selector: 'app-tournon',
  templateUrl: './tournon.component.html',
  styleUrls: ['./tournon.component.scss']
})
export class TournonComponent implements OnInit {

  subscription: Subscription | undefined;
  adSenseWidth: string = 'normal';

  constructor(readonly introService: IntroService) { }

  ngOnInit(): void {
    this.introService.intro$.next(false);
    this.subscription = this.introService.getaASenseWidth().subscribe(w => {
      this.adSenseWidth = w
    });
  }

}


