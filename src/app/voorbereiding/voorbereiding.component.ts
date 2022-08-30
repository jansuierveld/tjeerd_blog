import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IntroService } from './../intro.service';
@Component({
  selector: 'app-voorbereiding',
  templateUrl: './voorbereiding.component.html',
  styleUrls: ['./voorbereiding.component.scss']
})
export class VoorbereidingComponent implements OnInit {

  constructor(readonly introService: IntroService) { }

  ngOnInit(): void {
    this.introService.intro$.next(false);
  }

}
