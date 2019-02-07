import { Directive } from '@angular/core';
import { Validator,  NG_VALIDATORS ,FormControl } from '@angular/forms';

@Directive({
  selector: '[password-check]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true}]
})
export class PasswordValidatorDirective implements Validator{

  constructor() { }

  validate(c: FormControl): {[key: string]: any} {
     console.error(c.value);
      if(c.value == null)
        return null;

      if(c.value.length<8){
        return {"pattern": true};
      }
      //Write other validations here
      return null;
    }

}
