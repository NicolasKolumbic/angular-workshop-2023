import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  profileForm: FormGroup;

  constructor() {
    this.profileForm = new FormGroup({

      firstName: new FormControl(''),

      lastName: new FormControl(''),

      address: new FormGroup({

        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')

      })
    });
  }

  onSubmit() {
    console.log(this.profileForm);
  }
}
