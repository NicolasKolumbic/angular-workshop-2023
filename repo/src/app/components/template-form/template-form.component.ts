import { Component, ElementRef, ViewChild } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

@ViewChild('heroForm',{static: false}) form!: ElementRef;

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  newHero() {
    this.model = new Hero(42, '', '');
  }

  onSubmit() { 
    console.log(this.form);
    this.submitted = true; 
  }
}
