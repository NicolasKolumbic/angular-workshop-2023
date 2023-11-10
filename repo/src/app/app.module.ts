import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { SampleOneComponent } from './pages/sample-one/sample-one.component';
import { SampleTwoComponent } from './pages/sample-two/sample-two.component';
import { ValidatedTemplateFormComponent } from './components/validated-template-form/validated-template-form.component';
import { ValidatedReactiveFormComponent } from './components/validated-reactive-form/validated-reactive-form.component';
import { SampleThreeComponent } from './pages/sample-three/sample-three.component';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';
import { CommonModule } from '@angular/common';
import { CustomFieldComponent } from './components/custom-field/custom-field.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    SampleOneComponent,
    SampleTwoComponent,
    ValidatedTemplateFormComponent,
    ValidatedReactiveFormComponent,
    SampleThreeComponent,
    CustomDropdownComponent,
    CustomFieldComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
