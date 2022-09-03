import { Component, OnInit } from '@angular/core';
import { IntroService } from '../intro.service';

@Component({
  selector: 'app-luxeuis',
  templateUrl: './luxeuis.component.html',
  styleUrls: ['./luxeuis.component.scss']
})
export class LuxeuisComponent implements OnInit {

  constructor(readonly introService: IntroService) { }

  ngOnInit(): void {
    this.introService.intro$.next(false);
  }

}
