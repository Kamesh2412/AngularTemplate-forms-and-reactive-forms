import {Injectable} from '@angular/core'
import{HttpClient} from '@angular/common/http'
@Injectable()
  export class TodoService{
      constructor(private http:HttpClient){}
      private url:string="https://jsonplaceholder.typicode.com/todos"

      getTodoDetails(){
          return this.http.get<Object>(this.url)
      }
  }