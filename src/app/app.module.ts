import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './my-glam/home/home.component';
import { MyServicesComponent } from './my-glam/my-services/my-services.component';
import { OfferComponent } from './my-glam/offer/offer.component';
import { AccountComponent } from './my-glam/account/account.component';
import { ContactComponent } from './my-glam/contact/contact.component';
import { NewsletterComponent } from './my-glam/newsletter/newsletter.component';
import { MyGlamComponent } from './my-glam/my-glam.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyServicesComponent,
    OfferComponent,
    AccountComponent,
    ContactComponent,
    NewsletterComponent,
    MyGlamComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
