import {Injectable} from '@angular/core'
import{HttpClient} from '@angular/common/http'
@Injectable()
  export class WebService{
      constructor(private http:HttpClient){}
      private url:string="https://jsonplaceholder.typicode.com/posts"

      getWebDetails(){
          return this.http.get<Object>(this.url)
      }
  }