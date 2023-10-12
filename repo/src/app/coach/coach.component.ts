import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoachComponent {
  @Input() coachFullName!: string;
  
  isUpdate() {
    console.log('%cCoachComponent', 'background-color: green; color:white padding: 0.35rem 0.75rem'); 
  }
}
