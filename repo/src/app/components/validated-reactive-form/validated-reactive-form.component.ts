import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validated-reactive-form',
  templateUrl: './validated-reactive-form.component.html',
  styleUrls: ['./validated-reactive-form.component.scss']
})
export class ValidatedReactiveFormComponent {

  profileForm: FormGroup;

  constructor() {
    this.profileForm = new FormGroup({
      // Form Control: 
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      // Form Control
      lastName: new FormControl('', [Validators.required]),
      // Grupo de controles
      address: new FormGroup({

        street: new FormControl('', [
          Validators.required,
          Validators.minLength(4)
        ]),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        zip: new FormControl('', [Validators.required, Validators.pattern(/[0-9]{4-5}/g)])

      })
    });
  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get street() {
    return this.profileForm.get('address')?.get('street');
  }

  get city() {
    return this.profileForm.get('address')?.get('city');
  }

  get state() {
    return this.profileForm.get('address')?.get('state');
  }

  get zip() {
    return this.profileForm.get('address')?.get('zip');
  }

  onSubmit() {
    console.log(this.profileForm);
  }

}
