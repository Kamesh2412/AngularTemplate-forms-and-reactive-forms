import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home } from './Home';
import { Customer } from './Customer';
import {Product} from './Product'
import {PageNotFound} from './pageNotFound'
import {ProductDetail} from './ProductDetail'
import { CustomerService } from './customer.service';
import { WebService } from './webservice';
import{HttpClientModule} from '@angular/common/http'
import { TodoService } from './todoservice';
import { TemplateDriven } from './template';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { ReactiveDriven } from './reactiveForm';


@NgModule({
  declarations: [
    AppComponent,
    Home,
    Customer,Product,
    PageNotFound,
    ProductDetail,
    TemplateDriven,
    ReactiveDriven
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component:Home},
      {path:'customer',component:Customer},
      {path:'product',component:Product},
      {path:'product/:id',component:ProductDetail},
      {path:'template',component:TemplateDriven},
      {path:'reactive',component:ReactiveDriven},
      {path:'**',component:PageNotFound}
    ])
  ],
  providers: [CustomerService,WebService,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
