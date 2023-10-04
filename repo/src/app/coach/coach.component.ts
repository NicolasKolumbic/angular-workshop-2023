import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoachComponent {
  @Input() coachFullName!: string;

  ngOnInit(): void {
    console.log('%cOnInit', 'background-color: green; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterViewInit(): void {
    console.log('%cAfterViewInit', 'background-color: green; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterContentInit(): void {
    console.log('%cAfterContentInit', 'background-color: green; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterContentChecked(): void {
    console.log('%cAfterContentChecked', 'background-color: green; color:white padding: 0.35rem 0.75rem');
  }
  ngAfterViewChecked(): void {
    console.log('%cAfterViewChecked', 'background-color: green; color:white padding: 0.35rem 0.75rem');
  }
  ngDoCheck(): void {
    console.log('%cDoCheck', 'background-color: green; color:white padding: 0.35rem 0.75rem');
  }
  
  isUpdate() {
    console.log('%cCoachComponent', 'background-color: green; color:white padding: 0.35rem 0.75rem'); 
  }
}
