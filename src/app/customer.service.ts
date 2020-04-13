import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  customers = [{ 'id': 1, 'name': 'Kamesh', 'age': 23 },
  { 'id': 2, 'name': 'Saranya', 'age': 23 }, { 'id': 3, 'name': 'Suriyaa', 'age': 23 }
    , { 'id': 4, 'name': 'Goopi', 'age': 23 }, { 'id': 5, 'name': 'Sreenath', 'age': 23 }]


    getData(){
      return this.customers
    }
}
