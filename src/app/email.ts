import {AbstractControl} from '@angular/forms'

export function emailCheck(control : AbstractControl){
let email: any = control.value
let val = 	/^[a-z0-9]+$/i + '@abc.com'
if(email == val){
    
    return null
}else{
    return {'emailCheck':true}
}
}