import {AbstractControl} from '@angular/forms'

export function ageCheck(control : AbstractControl){
    let age: number= control.value
    if(age<=100){
        return null
    }else{
        return {'ageCheck':true}
    }
}