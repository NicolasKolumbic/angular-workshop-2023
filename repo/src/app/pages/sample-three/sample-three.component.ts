import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sample-three',
  templateUrl: './sample-three.component.html',
  styleUrls: ['./sample-three.component.scss']
})
export class SampleThreeComponent implements OnInit {

  formGroup!: FormGroup;
  options!: KeyValue<string, string>[]

    constructor(private readonly formBuilder: FormBuilder) {
        this.formGroup = this.formBuilder.group({
            country: ['ARG']
        })
    }

    get formValue() {
      return this.formGroup.value;
    }

  ngOnInit(): void {
    this.options = [
      {key: 'Brasil', value: 'BRA'},
      {key: 'Argentina', value: 'ARG'},
      {key: 'Chile', value: 'CHI'},
      {key: 'Uruguay', value: 'URU'},
      {key: 'Paraguay', value: 'PAR'}
    ]
  }

  submitHandler(event: Event) {
    console.log(this.formGroup.value);
  }
}
