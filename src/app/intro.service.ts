import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntroService {

  intro$ = new BehaviorSubject<boolean>(true);
  value:boolean | undefined;

  constructor() {

  }

  getIntroObs(): Observable<any> {
    return this.intro$.asObservable();
  }


}
