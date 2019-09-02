import { Component, OnInit } from '@angular/core';
import { BattleGroupe } from '../model/BattleGroupe';
import { EventsService } from '../events.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import {MaterialModule } from '../material';
import { Bar } from '../model/Bar';
import { Genre } from '../model/Genre';




@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
  providers: [AuthService]
})
export class EditEventComponent implements OnInit {
  inscrig;
  event;
  id;
  genres;
  genre:Genre = new Genre();
  bar:Bar = new Bar();
  battleGroupe:BattleGroupe = new BattleGroupe();
  constructor(
    private service: EventsService, 
    private http: HttpClient, 
    private routeur: Router,
    private authService: AuthService) 
    { }

  ngOnInit() {
    const session = this.authService.getSession();
    this.event = this.service.getEvent();
    this.bar.id=1;
    this.battleGroupe.bar=this.bar;
    this.genre.id=1;
    this.battleGroupe.genre=this.genre;
   this.http.get("http://localhost:8083/inscrig/event/"+this.event.id).subscribe(response =>{ this.inscrig =response});
   this.http.get("http://localhost:8083/genres")
   .subscribe(responses =>{
     console.log(responses);

     this.genres =responses; 
     console.log('this genre');
     console.log(this.genre);
    });

  }

  modifyEvent(){
    const getelement = this.http.post('http://localhost:8083/battlegroupeedit', this.event).toPromise();
    getelement.then(data => {
      this.routeur.navigate(['home_bar']);
    });
  }

 
 



  refuse(i){
    console.log(i);
    this.http.post('http://localhost:8083/refusegroupe', i)
    .subscribe(data =>{

    },err =>{
    console.log(err);
    });
  }

  getLogin() {
    return this.authService.getUser().login;
    //return JSON.parse(localStorage.getItem('user')).login;
  }

  logout() {
    console.log('Tentative de déconnexion');
    return this.authService.logout();
  }

  hasAnyRole(roles: string[]) {
    return this.authService.hasAnyRole(roles);
  }
}
