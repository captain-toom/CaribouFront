import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ChangeDetectorRef } from '@angular/core';
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
import { EditEventComponent } from './edit-event/edit-event.component';
import { RippleComponent } from './ripple/ripple.component';
import { RainComponent } from './rain/rain.component';
import { EventsService } from './events.service';
import { InscriptionclientComponent } from './inscriptionclient/inscriptionclient.component';

import { CreationbarComponent } from './creationbar/creationbar.component';

import { AmisComponent } from './amis/amis.component';
import { MaterialModule } from './material';
import { CreationgroupeComponent } from './creationgroupe/creationgroupe.component';
import { SubEvGrService } from './sub-ev-gr.service';
import { MatTableModule } from '@angular/material';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
import { MyProfilBarComponent } from './my-profil-bar/my-profil-bar.component';
import { PageEventComponent } from './page-event/page-event.component';
import { MyprofilclientComponent } from './myprofilclient/myprofilclient.component';
import { MyprofilgroupeComponent } from './myprofilgroupe/myprofilgroupe.component';



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

    EditEventComponent,
    
    RippleComponent,
    RainComponent,
    InscriptionclientComponent,

    CreationbarComponent,

    AmisComponent,

    CreationgroupeComponent,

    UploadimageComponent,
    MyProfilBarComponent,
    PageEventComponent,
    MyprofilclientComponent,
    MyprofilgroupeComponent,

    

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCheckboxModule,
    MaterialModule,
    MatTableModule,
    


    // angular.module("app", ["hm.readmore"]);


  ],
  providers: [AuthService,EventsService,SubEvGrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
