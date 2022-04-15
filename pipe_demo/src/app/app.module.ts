import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingsPipe } from './greetings.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { GendergreetingsPipe } from './gendergreetings.pipe';
import { StockinfoComponent } from './stockinfo/stockinfo.component';
import { StockPipe } from './stock.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsPipe,
    EmployeeComponent,
    GendergreetingsPipe,
    StockinfoComponent,
    StockPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
