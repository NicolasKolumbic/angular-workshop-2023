import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  coach: string = 'Lionel Scaloni';
  
  isUpdate() {
    console.log('%cChangeStrategyDetectionPageComponent', 'background-color: red; color:white padding: 0.35rem 0.75rem') 
  }
}
