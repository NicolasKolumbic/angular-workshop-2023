import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bench-of-substitutes',
  templateUrl: './bench-of-substitutes.component.html',
  styleUrls: ['./bench-of-substitutes.component.scss']
})
export class BenchOfSubstitutesComponent {
    @Input() players: any[] = [];
}
