import {Component} from '@angular/core'
import {CustomerService} from './customer.service'
@Component({
    template:`<h1>Welcome to Customer</h1>
    <table border="3">
    <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Age</th>
    </tr>
    <tr *ngFor="let cust of customers" >
    <td >{{cust.id}}</td>
    <td>{{cust.name}}</td>
    <td>{{cust.age}}</td>
    </tr>
    </table>
    `
})
export class Customer{
    customers = []
    constructor(private custSer:CustomerService){
this.customers=this.custSer.getData()
    }
}