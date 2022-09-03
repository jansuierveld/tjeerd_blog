import { Component, OnInit } from '@angular/core';
import { IntroService } from '../intro.service';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.scss']
})
export class OrangeComponent implements OnInit {

  constructor(readonly introService: IntroService) { }

  ngOnInit(): void {
    this.introService.intro$.next(false);
  }

}


