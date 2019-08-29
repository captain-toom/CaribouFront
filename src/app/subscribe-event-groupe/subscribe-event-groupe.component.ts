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
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-subscribe-event-groupe',
  templateUrl: './subscribe-event-groupe.component.html',
  styleUrls: ['./subscribe-event-groupe.component.css']
})
export class SubscribeEventGroupeComponent implements OnInit {
  id;
  events;
  data;
  event;
  subscribedevents;
  visible = false;
  visibleevent = false;
  noninscrit = false;
  genres;
  genreschecked = [];
  inscrig: InscriptionGroupe = new InscriptionGroupe();
  recherche: Recherche = new Recherche();
  columnsToDisplay: string[]=['nom','bar','dateEvent','capacite','cachetmax','genre'];
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
      this.data = new MatTableDataSource(this.events);
      console.log(this.data);
      this.data.filterPredicate = (ev, filters: string)=> {
        const matchFilter = [];
        const filterArray = filters.split(',');
        console.log(filterArray)
        const columns = [ev.bar.nom, ev.genre.nom, ev.cachetmax, ev.dateEvent, ev.bar.capacitemax];
        console.log(columns)
        const customFilter = [];
          customFilter.push(columns[0].toLowerCase().includes(filterArray[0]));
          customFilter.push(columns[1].toLowerCase().includes(filterArray[1]));
          customFilter.push(columns[2]<Number(filterArray[2]));
          customFilter.push(columns[2]>Number(filterArray[3]));
          var d=new Date(columns[3]);
          var dmax=new Date(filterArray[4]);
          customFilter.push(d<dmax);
          var dmin=new Date(filterArray[5]);
          customFilter.push(d>dmin);
          customFilter.push(columns[4]<Number(filterArray[6]));
          customFilter.push(columns[4]>Number(filterArray[7]));
        console.log(customFilter)
        return customFilter.every(Boolean);
      };
    });
    this.http.get("http://localhost:8083/genres").subscribe(response => { this.genres = response });

    // this.recherche.bar=null;
    this.recherche.genre=null;
    this.recherche.cachetmax=1000000000;
    this.recherche.cachetmin=0;
    this.recherche.datemax= new Date("3000-01-01");
    this.recherche.datemin= new Date("1971-01-01");
    this.recherche.capacitemax=Math.pow(10,15);
    this.recherche.capacitemin=0;
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

  // search() {
  //   this.data.filter=this.recherche.bar+','+this.recherche.genre+','+this.recherche.cachetmax+','+this.recherche.cachetmin+','+this.recherche.datemax+','+this.recherche.datemin+','+this.recherche.capacitemax+','+this.recherche.capacitemin;
  // }

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


