import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoachComponent } from './coach/coach.component';
import { BenchOfSubstitutesComponent } from './bench-of-substitutes/bench-of-substitutes.component';
import { BoardComponent } from './board/board.component';
import { PositionPlayersDropdownComponent } from './position-players-dropdown/position-players-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    CoachComponent,
    BenchOfSubstitutesComponent,
    BoardComponent,
    PositionPlayersDropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
