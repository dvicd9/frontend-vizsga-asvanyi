import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { PlushToysComponent } from './plush-toys/plush-toys.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'toys', component: PlushToysComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
