import { Component, OnInit } from '@angular/core';
import { IntroService } from '../intro.service';

@Component({
  selector: 'app-seillans',
  templateUrl: './seillans.component.html',
  styleUrls: ['./seillans.component.scss']
})
export class SeillansComponent implements OnInit {

  constructor(readonly introService: IntroService) { }

  ngOnInit(): void {
    this.introService.intro$.next(false);
  }

}
