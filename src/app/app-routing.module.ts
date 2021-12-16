import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { EmployeesComponent } from './content/employees/employees.component';
import { HomeComponent } from './content/home/home.component';
import { RatesComponent } from './content/rates/rates.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rates', component: RatesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
