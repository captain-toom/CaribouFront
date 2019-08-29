import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { HttpClient } from '@angular/common/http';
import { Bar } from '../model/Bar';
import { AuthService } from '../service/auth/auth.service';
import { BattleGroupe } from '../model/BattleGroupe';
import {MaterialModule } from '../material';



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

  
  visible= true;
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

  constructor(
    private http : HttpClient,
    private authService: AuthService,
    private service: EventsService
    ) { }

  

  ngOnInit() {
    document.body.classList.remove('bg-img');
    const session = this.authService.getSession()
    console.log(session);
    console.log(session.login)
    console.log(session.id)
    // login donc son mail

    this.http.get('http://localhost:8083/battlegroupes/old'+session.id)    
    .subscribe(
        response => {
          console.log("oldEvent");
          console.log(response);
          this.myOldEvent = response;
        }
    );
      
    this.http.get('http://localhost:8083/battlegroupes/futur'+session.id)    
    .subscribe(
        response => {
          console.log("futurEvent");
          console.log(response);
          this.myFuturEvent = response;
        }
    );

  }
  passevent(e){
    this.service.setEvent(e);
  }

  logout() {
    console.log('Tentative de déconnexion');
    return this.authService.logout(); 
   
  }
}
