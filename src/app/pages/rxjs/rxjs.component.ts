import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /* this.retornarObservable().subscribe( console.log ); */

    this.retornaIntervalo().subscribe( console.log );

    /* const obs$ =

    obs$.subscribe(
      valor => console.log(valor),
      error => console.warn(error),
      () => console.info('terminado valor en 5')
    ); */

  }

  retornaIntervalo(): Observable<number>{
    return interval(500)
      .pipe(
        take(10),
        map( valor => valor + 1),
        filter( valor => (valor % 2 === 0) ? true : false),
      );
  }

  retornarObservable() : Observable<number> {
    let i = -1;

    return new Observable( observer => {


      const interval = setInterval(() => {

        i++;
        observer.next(i);

        if( i === 2) {
          observer.error('error');
        }

        if( i === 5) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000)
    });

  }

}
