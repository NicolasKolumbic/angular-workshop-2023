import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-with-builder',
  templateUrl: './reactive-form-with-builder.component.html',
  styleUrls: ['./reactive-form-with-builder.component.scss']
})
export class ReactiveFormWithBuilderComponent {
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    });
  }

  onSubmit() {
    console.log(this.profileForm);
  }
}
