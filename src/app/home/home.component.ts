import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService]
})
export class HomeComponent implements OnInit {


  FuturEvent;


  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
  ) { }


  nbEvents;


  ngOnInit() {
    document.body.classList.remove('bg-img');
    this.http.get('http://localhost:8083/battlegroupes/client')
      .subscribe(
        response => {
          this.nbEvents = Object.keys(response).length;
          console.log(response);
          this.FuturEvent = response;
        }
      );
  }

  getEvent() {
    return JSON.parse(localStorage.getItem('event'));
  }

  setEvent(event: any) {
    localStorage.setItem('event', JSON.stringify(event));
  }
  voirEvent(e){
    this.setEvent({id: e.id, date : e.date, nom : e.nom, description : e.description, genre : e.genre.nom, prix : e.prix, ngGroupe : e.ngGroupe, bar : e.bar})
    this.router.navigate(['home/event']);  }

  getLogin() {
    return this.authService.getUser().login;
    //return JSON.parse(localStorage.getItem('user')).login;
  }

  logout() {
    console.log('Tentative de déconnexion');
    return this.authService.logout();
    //localStorage.removeItem('user');
    // localStorage.removeItem('type');
    //this.router.navigate(['/login']);
  }

  

  hasAnyRole(roles: string[]) {
    return this.authService.hasAnyRole(roles);
  }

}
