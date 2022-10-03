import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IntroService } from 'src/app/intro.service';

@Component({
  selector: 'app-adsensechild',
  templateUrl: './adsensechild.component.html',
  styleUrls: ['./adsensechild.component.scss']
})
export class AdsensechildComponent implements OnInit {


  subscription: Subscription | undefined;
  adSenseWidth: string = 'normal';

  constructor(readonly introService: IntroService) { }

  ngOnInit(): void {
    this.subscription = this.introService.getaASenseWidth().subscribe(w => {
      this.adSenseWidth = w
    });
  }

}
