import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { PlayerListComponent } from './pages/player-list/player-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'jugadores',
      component: PlayerListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
