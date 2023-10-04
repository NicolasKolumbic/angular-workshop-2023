import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-bench-of-substitutes',
  templateUrl: './bench-of-substitutes.component.html',
  styleUrls: ['./bench-of-substitutes.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class BenchOfSubstitutesComponent {
    @Input() players: Player[] = [];

    ngOnInit(): void {
      console.log('%cOnInit', 'background-color: #ff8c00; color:white padding: 0.35rem 0.75rem');
    }
    ngAfterViewInit(): void {
      console.log('%cAfterViewInit', 'background-color: #ff8c00; color:white padding: 0.35rem 0.75rem');
    }
    ngAfterContentInit(): void {
      console.log('%cAfterContentInit', 'background-color: #ff8c00; color:white padding: 0.35rem 0.75rem');
    }
    ngAfterContentChecked(): void {
      console.log('%cAfterContentChecked', 'background-color: #ff8c00; color:white padding: 0.35rem 0.75rem');
    }
    ngAfterViewChecked(): void {
      console.log('%cAfterViewChecked', 'background-color: #ff8c00; color:white padding: 0.35rem 0.75rem');
    }
    ngDoCheck(): void {
      console.log('%cDoCheck', 'background-color: #ff8c00; color:white padding: 0.35rem 0.75rem');
    }
    
    isUpdate() {
      console.log('%cBenchOfSubstitutesComponent', 'background-color: #ff8c00; color:white padding: 0.35rem 0.75rem'); 
    }
}
