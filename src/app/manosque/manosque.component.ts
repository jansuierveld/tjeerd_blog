import { Component, OnInit } from '@angular/core';
import { IntroService } from '../intro.service';

@Component({
  selector: 'app-manosque',
  templateUrl: './manosque.component.html',
  styleUrls: ['./manosque.component.scss']
})
export class ManosqueComponent implements OnInit {

  constructor(readonly introService: IntroService) { }

  ngOnInit(): void {
    this.introService.intro$.next(false);
  }

}


