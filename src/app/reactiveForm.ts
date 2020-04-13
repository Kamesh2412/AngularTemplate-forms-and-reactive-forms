import {Component} from '@angular/core'
import{FormGroup,FormControl,Validators} from '@angular/forms'
import {ageCheck} from './ageCheck'
import {emailCheck} from './email'
import {Router} from '@angular/router'
@Component({
    template:`<h1>ReactiveForms</h1>
    <div class="container">
    <form [formGroup]="customerForm" (ngSubmit)="showData()">
    Enter Email: <input type="text" formControlName="custId"/><br/>
    <div *ngIf="customerForm.controls['custId'].hasError('pattern')"  >
    <span [ngStyle]="{'color':'red'}"> Please enter valid email</span>
    </div>
    Enter Name: <input type="text" formControlName="custName"/><br/>
    <div *ngIf="customerForm.controls['custName'].hasError('required')"  >
    <span [ngStyle]="{'color':'red'}"> Please enter some text</span>
    </div>
    <div *ngIf="customerForm.controls['custName'].hasError('minlength')"  >
    <span [ngStyle]="{'color':'red'}"> Please enter some text</span>
    </div>

    Enter Age: <input type="text" formControlName="custAge"/><br/>
    <div *ngIf="customerForm.controls['custAge'].hasError('ageCheck')"  >
    <span [ngStyle]="{'color':'red'}"> Please enter valid Age</span>
    </div>
    <button type="submit" [disabled]="!customerForm.valid">Submit</button>
    </form>
    </div>
    `

})
    
    
    
    export class ReactiveDriven{
    customerForm = new FormGroup({
        custId:new FormControl('',[Validators.pattern("^[a-z0-9._%+-]")]),
        custName:new FormControl('abc',[Validators.required,Validators.minLength(4)]),
        custAge:new FormControl('',ageCheck),
    })
       showData(){
        console.log(this.customerForm.value)
       }

    }