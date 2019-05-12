import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceLicznikService {

  private sumClick = 0;
  private sum = new Subject<number>();

  constructor() { }

  addClickService(){

    this.sumClick += 1;
    this.sum.next(this.sumClick);
    console.log ('Suma: ' + this.sumClick);
  }

    getSum(): Observable<number>{
      return this.sum.asObservable();
   }
}
