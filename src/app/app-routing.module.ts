import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsListComponent } from './features/statistics/statistics-list/statistics-list.component';

const routes: Routes = [
  {path: "endpoints/statistics", component: StatisticsListComponent},
  {path: "**", redirectTo: "endpoints/statistics", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
