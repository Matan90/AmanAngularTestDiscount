import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiscountAppGridComponent } from './dicont-app-banner/discount-app-grid/discount-app-grid.component';
import { StudentAccountComponent } from './studentAccount/student-account/student-account.component';
import { DiscountMagazinComponent } from './discountMagazin/discount-magazin/discount-magazin.component';
import { AccountTypesComponent } from './accountTypes/account-types/account-types.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscountAppGridComponent,
    StudentAccountComponent,
    DiscountMagazinComponent,
    AccountTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
