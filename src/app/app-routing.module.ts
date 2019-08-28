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
import { EditEventComponent } from './edit-event/edit-event.component';
import { CreationbarComponent } from './creationbar/creationbar.component';
import { CreationgroupeComponent } from './creationgroupe/creationgroupe.component'

import { AmisComponent } from './amis/amis.component';


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
    path: 'inscriptionbar',
    component: CreationbarComponent

  },
  {
    path: 'inscriptiongroupe',
    component: CreationgroupeComponent

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
    },    
    children: [      
      {
        path: 'amis',        
        component: AmisComponent,
      }
      
    ]
  },
  {
    path: 'createevent',
    component: CreateEventComponent
  },
  {
    path: 'home_bar',
    canActivate: [AuthGuard],
    component: HomebarComponent,
    
    data: {
      roles: ['BAR']
    }
  },
  
  {
    path: 'home_band',
    canActivate: [AuthGuard],
    component: HomebandComponent,
   
    data: {
      roles: ['GROUPE']
    }, 
    children: [      
      {
        path: 'subscribe_event_groupe',        
        component: SubscribeEventGroupeComponent,
      }
    ]
  },
  {
    path: 'edit_event',
    component: EditEventComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

export const routingComponents = [AmisComponent]
