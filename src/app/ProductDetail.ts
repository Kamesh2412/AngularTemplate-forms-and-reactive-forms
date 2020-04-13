import {Component,OnInit} from '@angular/core'
import{ActivatedRoute} from '@angular/router'
@Component({
    template:`<h1>You have selected : {{prod_id}} </h1>`
})
export class ProductDetail implements OnInit{
    constructor(private actRoute:ActivatedRoute){ }
        public prod_id
     //   public prod_name
ngOnInit(){
    this.prod_id=this.actRoute.snapshot.params['id']
    // this.prod_name = this.actRoute.snapshot.params['name']
}
   
}