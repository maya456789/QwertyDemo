import { Component } from '@angular/core';
import { ValidatorFn, ValidationErrors, UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../services/validation-forms-service.service';
import { NgbCalendar,NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

/** passwords must match - custom validator */
export function confirmPasswordValidator(control: UntypedFormGroup): ValidationErrors | null {
  const password = control.get('password');
  const confirm = control.get('confirmPassword');
  return password?.value && password?.value === confirm?.value
    ? null
    : { passwordMismatch: false };
};

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  providers: [ValidationFormsService],
})
export class RegisterPageComponent {
  simpleForm : UntypedFormGroup;
  submitted = false;
  formErrors: any;
  model : NgbDateStruct |undefined;
  today = this.calendar.getToday();

  constructor(private calendar: NgbCalendar,private fb: UntypedFormBuilder, public vf: ValidationFormsService) {
    this.formErrors = this.vf.errorMessages;
    this.simpleForm = this.fb.group(
      {
        firstName: ['', [Validators.required,Validators.maxLength(this.vf.formRules.firstnameMax)]],
        lastName: ['', [Validators.required]],
        email: ['', Validators.compose([Validators.required,Validators.maxLength(255),Validators.pattern(/^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/)
         ])],
        phoneNo: ['',Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]+$")])],
        orgName: ['', [Validators.required,Validators.maxLength(this.vf.formRules.orgNameMax)]],
        orgAddress: ['', [Validators.required,Validators.maxLength(this.vf.formRules.orgAddressMax) ]],
       
        
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(this.vf.formRules.passwordMin),
            Validators.maxLength(this.vf.formRules.passwordMax),
            Validators.pattern(this.vf.formRules.passwordPattern),
          ],
        ],
        
        orgRegDate: ['', [Validators.required, ]],
        accept: [false, [Validators.requiredTrue]],
      },
      
    );
    //this.createForm();
  }

  

  // convenience getter for easy access to form fields
  get f() {
    return this.simpleForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.simpleForm.reset();
  }

  onValidate() {
    this.submitted = true;
   // console.log('Form validity:',this.simpleForm);
    // stop here if form is invalid
    return this.simpleForm.status === 'VALID';
  }

  onSubmit() {
    console.warn(this.onValidate(), this.simpleForm.value);

    if (this.onValidate()) {
      // TODO: Submit form value
      console.warn(this.simpleForm.value);
      alert('SUCCESS!');
    }
  }

}
