import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { AuthGuard } from './service/auth/auth.guard';
import { HomebarComponent } from './homebar/homebar.component';
import { SubscribeEventGroupeComponent } from './subscribe-event-groupe/subscribe-event-groupe.component';
import { HomebandComponent } from './homeband/homeband.component';
import { InscriptionclientComponent } from './inscriptionclient/inscriptionclient.component';
import { LoginsidenavComponent } from './loginsidenav/loginsidenav.component'


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'connexion',
    component: LoginsidenavComponent
  },

  {
    path: 'inscriptionclient',
    component: InscriptionclientComponent

  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
    data: {
      roles: ['CLIENT']
    }

  },
  {
    path: 'createevent',
    component: CreateEventComponent
  },
  {
    path: 'home_bar',
    component: HomebarComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['BAR']
    }
  },
  {
    path: 'subscribe_event_groupe',
    component: SubscribeEventGroupeComponent
  },
  {
    path: 'home_band',
    component: HomebandComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['GROUPE']
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
