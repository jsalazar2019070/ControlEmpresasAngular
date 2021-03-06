import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {

  constructor() { }

  Carga( archivos: String[]){

    for(let archivo of archivos){

      let scripts = document.createElement("script");

      scripts.src = "../../assets/js/" + archivo + ".js";

      let body = document.getElementsByTagName("body")[0];

      body.appendChild( scripts );
    }
  }
}
