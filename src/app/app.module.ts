import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { NavbarComponentComponent } from './shared/components/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './shared/components/footer-component/footer-component.component';
import { TextscrollComponentComponent } from './shared/components/textscroll-component/textscroll-component.component';

import { ReactiveFormsModule } from '@angular/forms';

import { SocialMidiaComponent } from './shared/components/social-midia/social-midia.component';
import { FeedbackCarousellComponent } from './shared/components/feedback-carousell/feedback-carousell.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    TextscrollComponentComponent,

    SocialMidiaComponent,
    FeedbackCarousellComponent,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,

    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
