import { Component, OnInit } from '@angular/core';
import { IntroService } from '../intro.service';

@Component({
  selector: 'app-charentay',
  templateUrl: './charentay.component.html',
  styleUrls: ['./charentay.component.scss']
})
export class CharentayComponent implements OnInit {

  constructor(readonly introService: IntroService) { }

  ngOnInit(): void {
    this.introService.intro$.next(false);
  }

}


