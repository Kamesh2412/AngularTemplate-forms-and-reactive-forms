import {Component} from '@angular/core'
import {Router} from '@angular/router'
@Component({
    template:`<table border="3">
    <tr>
    <th>id</th>
    <th>Product</th>
    <th>Description</th>
    </tr>
    <tr *ngFor="let prod of product" (click)="passId(prod)">
    <td >{{prod.id}}</td>
    <td>{{prod.product}}</td>
    <td>{{prod.desc}}</td>
    </tr>
    </table>
    `
})
export class Product{
    constructor(private route:Router){

    }
    product = [{
        'id': 1, 'product': 'Dell', 'desc': 'Laptop'
      }, {
        'id': 2, 'product': 'Lenovo', 'desc': 'Desktop'
      },
      { 'id': 3, 'product': 'HP', 'desc': 'Laptop' }]

      passId(prod){
          this.route.navigate(['/product',prod.product])
      }
}

