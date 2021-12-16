import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './content/home/home.component';
import { RatesComponent } from './content/rates/rates.component';
import { EmployeesComponent } from './content/employees/employees.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { RatesService } from './content/rates/rates.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from './content/employees/employees.service';
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RatesComponent,
    EmployeesComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.AGM_CORE_API_KEY
    })
  ],
  providers: [RatesService, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
