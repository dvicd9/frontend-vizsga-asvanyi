import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit{
  inventory: any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get<any>('https://infra-hulling-376212-default-rtdb.europe-west1.firebasedatabase.app/plushies.json')
    .subscribe( (inventory: any[]) => {
      this.inventory = inventory;
      console.log(inventory);
    });
  }
}
