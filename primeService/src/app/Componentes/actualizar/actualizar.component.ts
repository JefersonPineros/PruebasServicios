import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Items2 } from '../../Models/itemsModel';
import {ServicioActualizarService} from '../../Servicios/actualizarService/servicio-actualizar.service';
import { ItemService } from '../../Servicios/item.service';
import * as Cookies from 'js-cookie';
import { NgForm } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  public idSeleccionado: any;
  public listItems: Array<Items2>;
  public item: Items2;
  public x;
  formActualizar: NgForm ;
  constructor(private actualizarServicio: ServicioActualizarService, private itemService: ItemService) {
    // this.itemService.getItems().subscribe(
    //   resp => {
    //     this.lista = resp
    //     this.listItems = this.lista.result.items;
    //   }
    // )
   }

  ngOnInit(): void {
    this.inciar();
  }
  inciar(): void{
    this.listItems = JSON.parse(sessionStorage.getItem('listaItem'));
    this.actualizarServicio.getActualizar().subscribe(
      resp => {
        if ( resp !== ''){
          this.x = resp;
          this.idSeleccionado = this.x;
          console.log(this.idSeleccionado);
        }
      }
    );
    this.actualizarServicio.getLista().subscribe(
      res => {
        console.log(res);
      }
    );
  }
  cargarSeleccionado(): void{
    this.idSeleccionado = parseInt(Cookies.get('Selecionado'));
    this.listItems.forEach((it, index) => {
      if (index === this.idSeleccionado){
        this.item = new Items2(it._about, it.accessURL, it.byteSize, it.format, it.title, it.type);
      }
    });
  }
  ngSubmit(): void{
    this.listItems.forEach((item, index) => {
      if (index === this.idSeleccionado){
        this.listItems[index] = this.item;
        console.log(this.listItems);
      }
    });
    sessionStorage.setItem('ItemAc', JSON.stringify(this.listItems));

  }

}
