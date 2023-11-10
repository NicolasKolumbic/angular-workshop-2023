import { Component, ElementRef, ViewChild } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-validated-template-form',
  templateUrl: './validated-template-form.component.html',
  styleUrls: ['./validated-template-form.component.scss']
})
export class ValidatedTemplateFormComponent {

  @ViewChild('heroForm',{static: false}) form!: ElementRef;

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  onSubmit() { 
    console.log(this.form);
  }

}
