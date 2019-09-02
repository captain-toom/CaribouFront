import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { HttpClient } from '@angular/common/http';
import { Bar } from '../model/Bar';
import { AuthService } from '../service/auth/auth.service';
import { BattleGroupe } from '../model/BattleGroupe';
import {MaterialModule } from '../material';
import { Router } from '@angular/router';



@Component({
  selector: 'app-homebar',
  templateUrl: './homebar.component.html',
  styleUrls: ['./homebar.component.css'],
  providers: [AuthService]
})
export class HomebarComponent implements OnInit {

  allEvent;
  myAllEvent;
  myOldEvent;
  myFuturEvent;
  mybar;
  addresse : String;
  nbEventsF;
  nbEventsP;
  User;
  visible= true;


  constructor(
    private http : HttpClient,
    private authService: AuthService,
    private service: EventsService,
    private router: Router,
    ) { }

  

  ngOnInit() {

    console.log(this.authService.getSession().id)
    console.log("connexion reussie")
    document.body.classList.remove('bg-img');
    const session = this.authService.getSession();
    console.log(session)
    
      this.http.get('http://localhost:8083/battlegroupes/futur'+this.authService.getSession().id).subscribe(
        response => {
          this.nbEventsF = Object.keys(response).length;
          console.log("futurEvent");
          console.log(response);
          console.log("nbEventsF");
          console.log(this.nbEventsF);
          this.myFuturEvent = response;
        });   
 
    
    // login donc son mail 
        
    this.http.get('http://localhost:8083/battlegroupes/old'+session.id)    
    .subscribe(
        response => {
          this.nbEventsP = Object.keys(response).length;
          console.log("oldEvent");
          console.log(response);
          this.myOldEvent = response;
        }
    );
  }


  passevent(e){     
    this.router.navigate(['home_bar/edit_event']);
  this.service.setEvent(e);  
   
  }

  logout() {
    console.log('Tentative de déconnexion');
    return this.authService.logout(); 
   
  }

  voirCache(e : BattleGroupe) {
    //requete hhtp modif set visible client
    this.http.put('http://localhost:8083/battleGroupesVisibleClient/'+e.id, e)    
    .subscribe(
        response => {
          console.log(response);
          this.ngOnInit();
        }
    ); 
    // puis recharge de la page
  }



  getEvent() {
    return JSON.parse(localStorage.getItem('event'));
  }
  setEvent(event: any) {
    localStorage.setItem('event', JSON.stringify(event));
  }
  getLogin() {
    return this.authService.getUser().login;
  }
  hasAnyRole(roles: string[]) {
    return this.authService.hasAnyRole(roles);
  }
  voirEvent(e){
    this.setEvent({id: e.id, date : e.date, nom : e.nom, description : e.description, genre : e.genre.nom, prix : e.prix, ngGroupe : e.ngGroupe, cachetMax : e.cachetmax})
    this.router.navigate(['/event']);  }

}
