import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  testdata = new Observable((observer) => {

    observer.next("praveen");
    observer.next("bhargavi");
    observer.complete();

  });

}
