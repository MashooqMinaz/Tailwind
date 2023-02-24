import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdsbarComponent } from './components/adsbar/adsbar.component';
import { ContentsComponent } from './components/contents/contents.component';
import { CardsComponent } from './components/cards/cards.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdsbarComponent,
    ContentsComponent,
    CardsComponent,
    EnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
