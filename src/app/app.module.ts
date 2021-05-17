import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { TopProductComponent } from './top-product/top-product.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { PopularCategoriesComponent } from './popular-categories/popular-categories.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    DashboardComponent,
    RecentOrdersComponent,
    TopProductComponent,
    SalesReportComponent,
    PopularCategoriesComponent,
    ActiveUsersComponent,
    UpcomingEventsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
