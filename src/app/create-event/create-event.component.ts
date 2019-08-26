import { Component, OnInit } from '@angular/core';
import { BattleGroupe } from "../model/BattleGroupe";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  genres;
  battleGroupe:BattleGroupe = new BattleGroupe();
  constructor(private http: HttpClient, private routeur: Router) { }

  ngOnInit() {
     this.battleGroupe.date            = null;
     this.battleGroupe.nom             = null;
     this.battleGroupe.description     =null;
     this.battleGroupe.visible_client  =false;
     this.battleGroupe.cachetmax       =null;
     this.battleGroupe.prix            =null;
     this.battleGroupe.bar_id         =1;
     this.battleGroupe.genre_id        =1;
     this.http.get("http://localhost:8083/genres").subscribe(response =>{ this.genres =response});
  }

   addBattleGroupe(){
     this.http.post('http://localhost:8083/battlegroupe', this.battleGroupe)
     .subscribe(data =>{

     },err =>{
     console.log(err);
     });
  }

}
