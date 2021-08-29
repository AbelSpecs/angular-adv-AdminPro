import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    });

    /* const promesa = new Promise((resolve, reject) => {

      if(false){
        resolve('Hola mundo');
      }
      else {
        reject('Algo salio mal');
      }

    });

    promesa.then((resolve) => {
      console.log(resolve);
    })
    .catch((reject) =>{
      console.log(reject);
    }) */
  }

  getUsuarios() {

    const promise = new Promise((resolve, reject) => {

      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data));

    });

    return promise;
  }



}
