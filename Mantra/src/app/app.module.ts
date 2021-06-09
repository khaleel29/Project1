import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './Mantra/top-navbar/top-navbar.component';
import { MainNavbarComponent } from './Mantra/main-navbar/main-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    MainNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
