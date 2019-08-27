import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recherche } from '../model/Recherche';
import { filter } from 'minimatch';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { InscriptionGroupe } from '../model/IncriptionGroupe';

@Component({
  selector: 'app-subscribe-event-groupe',
  templateUrl: './subscribe-event-groupe.component.html',
  styleUrls: ['./subscribe-event-groupe.component.css']
})
export class SubscribeEventGroupeComponent implements OnInit {
  events;
  eventsfiltred;
  event;
  visible = false;
  visibleevent = false;
  genres;
  genreschecked = [];
  inscrig: InscriptionGroupe=new InscriptionGroupe();
  recherche: Recherche = new Recherche();
  constructor(private http:HttpClient, private routeur: Router) { }

  ngOnInit() {
    this.http.get("http://localhost:8083/battlegroupesfutur").subscribe(response =>{ this.events =response, this.eventsfiltred= response});
    this.http.get("http://localhost:8083/genres").subscribe(response =>{ this.genres =response});
  }
openevent(e){
  this.event=e;
  this.visibleevent=true;
}

opensearch(){
  this.visible=!this.visible;
}

search(){
  console.log(this.events);
  this.eventsfiltred="ev of this.events| filter:recherche";
}

inscrire(e){
  this.inscrig.event=e;
  this.inscrig.groupe.id=1;
  this.http.post('http://localhost:8083/groupeinscri', this.inscrig)
     .subscribe(data =>{

     },err =>{
     console.log(err);
     });
}

}
