import {Component} from '@angular/core'
import {Router} from '@angular/router'
@Component({
    template:`
 <div class="container">
 <h1>Template Driven Form</h1>
 <form #studentForm="ngForm" (ngSubmit)="submitData(studentForm.value)">
    <div class="form-group">
        <label>Enter Name</label>
        <input type="text" class="form-control" name="fname" ngModel/>
    </div>
    <div class="form-group">
        <label>Enter Age</label>
        <input type="text" class="form-control" name="age" ngModel/>
    </div>
    
    <div class="form-group">
    Gender
    <div class="radio">
        <label>
            <input  type="radio" name="rdoResult" ng-value="'pass'">
              Male
        </label>
        <label>
        <input  type="radio" name="rdoResult" ng-value="'fail'">
          Female
    </label>
    </div>
  
</div>

    <div class="form-group">
        <label>Enter email</label>
        <input type="email" class="form-control" name="email" ngModel/> <br>
         <button class="btn btn-primary">Submit</button>
     </div>
 </form>
 </div>
 `
})
export class TemplateDriven{
    submitData(data){
   
        console.log(data)
        console.log(data.fname)
        console.log(data.age)
    }
   
}