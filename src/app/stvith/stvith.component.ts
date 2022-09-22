import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { IntroService } from '../intro.service';
import { Banner } from '../shared/banner/banner.model';

@Component({
  selector: 'app-stvith',
  templateUrl: './stvith.component.html',
  styleUrls: ['./stvith.component.scss']
})
export class StvithComponent implements OnInit {

  banner: Banner;


  constructor(readonly introService: IntroService) {
    this.banner = new Banner(
      'ca-pub-8239777228243047',
      '5702571326' ,
      'auto',
      'true'
    )
   }


  ngOnInit(): void {
    this.introService.intro$.next(false);
  }

}
