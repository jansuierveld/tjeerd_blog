import { Component, OnInit } from '@angular/core';
import { IntroService } from '../intro.service';

@Component({
  selector: 'app-remich',
  templateUrl: './remich.component.html',
  styleUrls: ['./remich.component.scss']
})
export class RemichComponent  implements OnInit {

  constructor(readonly introService: IntroService) { }

  ngOnInit(): void {
    this.introService.intro$.next(false);
  }

}
