import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IntroService } from '../intro.service';

@Component({
  selector: 'app-tournon',
  templateUrl: './tournon.component.html',
  styleUrls: ['./tournon.component.scss']
})
export class TournonComponent implements OnInit {

  constructor(readonly introService: IntroService) { }

  ngOnInit(): void {
    this.introService.intro$.next(false);
  }

}


