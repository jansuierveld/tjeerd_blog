import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntroService {

  intro$ = new BehaviorSubject<boolean>(true);
  adSenseWidth$= new BehaviorSubject<string>('normal');

  constructor() {
  }

  getIntroObs(): Observable<any> {
    return this.intro$.asObservable();
  }

  getaASenseWidth(): Observable<any> {
    return this.adSenseWidth$.asObservable();
  }


}
