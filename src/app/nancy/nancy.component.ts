import { Component, OnInit } from '@angular/core';
import { IntroService } from '../intro.service';

@Component({
  selector: 'app-nancy',
  templateUrl: './nancy.component.html',
  styleUrls: ['./nancy.component.scss']
})
export class NancyComponent implements OnInit {

  constructor(readonly introService: IntroService) { }

  ngOnInit(): void {
    this.introService.intro$.next(false);
  }

}