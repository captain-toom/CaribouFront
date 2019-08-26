import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreateEventComponent } from './create-event/create-event.component';

import { AuthService } from './service/auth/auth.service';


import { HomebarComponent } from './homebar/homebar.component';
import { HomebandComponent } from './homeband/homeband.component';
import { LoginsidenavComponent } from './loginsidenav/loginsidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    CreateEventComponent,
    HomebarComponent,
    HomebandComponent,
    LoginsidenavComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
