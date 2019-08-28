import { Component, OnInit } from '@angular/core';
import { BattleGroupe } from '../model/BattleGroupe';
import { EventsService } from '../events.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  inscrig;
  event;
  id;
  constructor(private service: EventsService, private http: HttpClient, private routeur: Router) { }

  ngOnInit() {
    this.event = this.service.getEvent();
   this.http.get("http://localhost:8083/inscrig/"+this.event.id).subscribe(response =>{ this.inscrig =response});
  }

  modifyEvent(){
    this.http.post('http://localhost:8083/battlegroupeedit', this.event)
     .subscribe(data =>{

     },err =>{
     console.log(err);
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
}
