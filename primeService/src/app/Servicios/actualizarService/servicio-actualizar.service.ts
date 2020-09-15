import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioActualizarService {


  private subject = new Subject<any>();
  private subject2 = new Subject<any>();
  constructor() { }

  sendActualizar(seleccionado:string){
    this.subject.next(seleccionado);
  }

  getActualizar(){
    return this.subject.asObservable();
  }
  sendList(lista:Array<any>){
    this.subject2.next(lista);
  }
  getLista(){
    return this.subject2.asObservable();
  }
}
