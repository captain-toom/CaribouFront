import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { AuthGuard } from './service/auth/auth.guard';
import { HomebarComponent } from './homebar/homebar.component';
import { SubscribeEventGroupeComponent } from './subscribe-event-groupe/subscribe-event-groupe.component';
import { HomebandComponent } from './homeband/homeband.component';
import { EditEventComponent } from './edit-event/edit-event.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
    data : {
      roles : ['CLIENT']
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
    data : {
      roles : ['BAR']
    }
  },
  {
    path: 'subscribe_event_groupe',
    component: SubscribeEventGroupeComponent
  },
{
  path : 'home_band', 
  component: HomebandComponent,
  canActivate: [AuthGuard],
  data : {
    roles : ['GROUPE']
  }
},
{
  path : 'edit_event', 
  component: EditEventComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
