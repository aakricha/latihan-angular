import { HttpService } from './http.service';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { NavComponent } from './nav.component';
import { FriendDetailComponent } from './friend-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail.component';
import { HomeComponent } from './home.component';
import { FriendListComponent } from './friend-list.component';
import { FriendService } from './friend.service';
import { AppRoutingModule } from './app-routing.module';
import { ContainerComponent } from './container.component';
import { AboutComponent } from './about.component';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';
import { CustomerDetailComponent } from './customer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserListComponent,
    HomeComponent,
    FriendListComponent,
    FriendDetailComponent,
    NavComponent,
    ContactComponent,
    ContainerComponent,
    AboutComponent,
    CustomerComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [FriendService, HttpService, CustomerService],
  bootstrap: [ContainerComponent]
})
export class AppModule { }