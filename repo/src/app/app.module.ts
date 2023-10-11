import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { SampleOneComponent } from './pages/sample-one/sample-one.component';
import { SampleTwoComponent } from './pages/sample-two/sample-two.component';
import { SampleThreeComponent } from './pages/sample-three/sample-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SampleOneComponent,
    SampleTwoComponent,
    SampleThreeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
