import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { IntroService } from '../intro.service';
import { Banner } from '../shared/banner/banner.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stvith',
  templateUrl: './stvith.component.html',
  styleUrls: ['./stvith.component.scss']
})
export class StvithComponent implements OnInit {

  constructor(readonly introService: IntroService) {
  }

  ngOnInit(): void {
    this.introService.intro$.next(false);
  }

}
