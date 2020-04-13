import {Component,OnInit} from '@angular/core'
import {WebService} from './webservice'
import {TodoService} from './todoservice'
@Component({
    template:`<h1>Welcome to Home</h1>
    <table border="3" >
    <tr>
    <th>userId</th>
    <th>id</th>
    <th>title</th>
    <th>body</th>
    <th>completed</th>
    </tr>
    <tr *ngFor="let cust of webData" >
    <td >{{cust.userId}}</td>
    <td>{{cust.id}}</td>
    <td>{{cust.title}}</td>
    <td>{{cust.body}}</td>
    </tr>
<tr *ngFor="let todo of todoData"  [ngClass]="{done: todo.completed,notdone:!todo.completed}" >
<td >{{todo.completed}}</td>
</tr>

    </table>`,
    styles:[`
    .done{
        background-color=green
    },
    .notdone{
        background-color=red
    }
    `]
})
export class Home{
    todoData:any
   
    constructor(private api:WebService,private todo:TodoService){

    }
    webData:any


    ngOnInit(){
        this.api.getWebDetails().subscribe(result=>this.webData=result)
        this.todo.getTodoDetails().subscribe(result1=>this.todoData=result1)
    }

}