import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recherche } from '../model/Recherche';
import { filter } from 'minimatch';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { InscriptionGroupe } from '../model/IncriptionGroupe';
import { AuthService } from '../service/auth/auth.service';
import { SubEvGrService } from '../sub-ev-gr.service';
import { MatTableModule } from '@angular/material'  ;



@Component({
  selector: 'app-subscribe-event-groupe',
  templateUrl: './subscribe-event-groupe.component.html',
  styleUrls: ['./subscribe-event-groupe.component.css']
})
export class SubscribeEventGroupeComponent implements OnInit {
  id;
  events;
  eventsfiltred;
  event;
  subscribedevents;
  visible = false;
  visibleevent = false;
  noninscrit = false;
  genres;
  genreschecked = [];
  inscrig: InscriptionGroupe = new InscriptionGroupe();
  recherche: Recherche = new Recherche();
  columnsToDisplay=['nom','bar','dateEvent','capacite','cachetmax','genre'];
  constructor(private http: HttpClient, private routeur: Router, private authService: AuthService, private subEvGrService: SubEvGrService, private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    const session = this.authService.getSession()
    this.id = session.id;
    this.http.get("http://localhost:8083/inscrig/event/" + this.id)
    .subscribe(
      response => { 
        this.subscribedevents = response 
      });

    this.http.get("http://localhost:8083/noninscrig/event/" + this.id).subscribe(response => { 
      this.events = response, 
      this.eventsfiltred = response
      this.eventsfiltred.forEach(element => {
        element.bar=element.bar.nom;
        element.genre=element.genre.nom;   
      });
    });
    this.http.get("http://localhost:8083/genres").subscribe(response => { this.genres = response });
  }
  openevent(e) {
    this.event = e;
    this.visibleevent = true;
    this.noninscrit = true;
  }
  openeventsub(e) {
    this.event = e;
    this.visibleevent = true;
    this.noninscrit = false;
  }

  opensearch() {
    this.visible = !this.visible;
  }

  search() {
    console.log(this.events);
    this.eventsfiltred = "ev of this.events| filter:recherche";
  }

  inscrire(e) {
    this.inscrig.event = e;
    this.inscrig.groupe.id = 1;
    this.inscrig.refused = false;
    const d=this.http.post('http://localhost:8083/groupeinscri', this.inscrig).toPromise();
      d.then(data => {
        this.ngOnInit();
      }, err => {
        console.log(err);
      });


    this.noninscrit = false;
  }



  }


