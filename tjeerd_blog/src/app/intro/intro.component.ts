import { IntroService } from './../intro.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  isIntro: boolean = true;

  constructor(readonly introService: IntroService) { }

  ngOnInit(): void {
    this.introService.intro$.next(true);
  }

}
