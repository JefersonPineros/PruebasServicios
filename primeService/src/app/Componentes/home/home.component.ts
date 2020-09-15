import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../Servicios/item.service';
import { ServicioActualizarService } from '../../Servicios/actualizarService/servicio-actualizar.service';
import * as Cookies from 'js-cookie';
import { Items } from 'src/app/Models/item';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public item: Items[];
  constructor(private itemService: ItemService, private actualizarServicio: ServicioActualizarService) {
  }

  ngOnInit(): void {
    this.getItems();
  }
  getItems(): void {
    const actualizadoItem = sessionStorage.getItem('ItemAc');
    const itemSelecciona = parseInt(Cookies.get('Seleccionado'));

    if (actualizadoItem != null || itemSelecciona != null) {
      this.item = JSON.parse(actualizadoItem);
    } else {
      this.itemService.getItems().subscribe(
        result => {
          this.item = result;
          sessionStorage.setItem('ItemAc', JSON.stringify(this.item));
          console.log(this.item);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  eliminar(val): void {

    let _about = val.toString();
    this.item.forEach((item, index) => {
      if (item._about === _about) {
        console.log(item._about);
        this.item.splice(index, 1);
      }
    })

  }
  actualizar(val): void {
    let seleccionado: string = val.toString();
    let indexSeleccionado;
    this.item.forEach((item, index) => {
      if (item._about === seleccionado) {
        console.log(index);
        indexSeleccionado = index;
      }
    });
    Cookies.set('Selecionado', indexSeleccionado);
    this.actualizarServicio.sendActualizar(indexSeleccionado.toString());
    sessionStorage.setItem('listaItem', JSON.stringify(this.item))
  }
  cargarLista(): void{
    this.itemService.getItems().subscribe(
      result => {
        if (this.item !== []){
          this.item = result;
        }
        sessionStorage.setItem('ItemAc', JSON.stringify(this.item));
        console.log(this.item);
      },
      error => {
        console.log(error);
      }
    );
  }
}
