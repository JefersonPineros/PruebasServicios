import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm, FormGroup } from '@angular/forms';
import { Items2 } from 'src/app/Models/itemsModel';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  public item: Items2;
  public listItem: Array<Items2>;
  public position: string;
  public displayPosition: boolean;
  constructor() {
    this.listItem = [];
    this.item = new Items2('', '', null, '', '', '');
   }

  ngOnInit(): void {
  }
  ngSubmit(): void{

    let sessionStorage1 = sessionStorage.getItem('ItemAc');
    this.listItem = JSON.parse(sessionStorage1);
    console.log(this.listItem);
    this.listItem.push(this.item);
    console.log(this.listItem);
    sessionStorage.setItem('ItemAc', JSON.stringify(this.listItem));
  }
  showPositionDialog(position: string): void {
    this.position = position;
    this.displayPosition = true;
  }
}
