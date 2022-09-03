import { Component, OnInit } from '@angular/core';
import { IntroService } from '../intro.service';

@Component({
  selector: 'app-beaune',
  templateUrl: './beaune.component.html',
  styleUrls: ['./beaune.component.scss']
})
export class BeauneComponent implements OnInit {

  constructor(readonly introService: IntroService) { }

  ngOnInit(): void {
    this.introService.intro$.next(false);
  }

}


