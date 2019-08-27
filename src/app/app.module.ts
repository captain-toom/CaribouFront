import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCheckboxModule } from '@angular/material/checkbox';

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
import { SubscribeEventGroupeComponent } from './subscribe-event-groupe/subscribe-event-groupe.component';
<<<<<<< HEAD
import { EditEventComponent } from './edit-event/edit-event.component';
=======
import { RippleComponent } from './ripple/ripple.component';
import { RainComponent } from './rain/rain.component';
>>>>>>> 39955c434f040c06f8ad5a435baeaa7ac42dcc99

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    CreateEventComponent,
    HomebarComponent,
    HomebandComponent,
    LoginsidenavComponent,
    SubscribeEventGroupeComponent,
<<<<<<< HEAD
    EditEventComponent
=======
    RippleComponent,
    RainComponent
>>>>>>> 39955c434f040c06f8ad5a435baeaa7ac42dcc99
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCheckboxModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
