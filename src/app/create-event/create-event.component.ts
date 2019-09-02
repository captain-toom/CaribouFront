import { Component, OnInit } from '@angular/core';
import { BattleGroupe } from "../model/BattleGroupe";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Bar } from '../model/Bar';
import { Genre } from '../model/Genre';
import { AuthService } from '../service/auth/auth.service';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
  providers: [AuthService]
})
export class CreateEventComponent implements OnInit {

  genres;
  battleGroupe:BattleGroupe = new BattleGroupe();
  bar:Bar = new Bar();
  genre:Genre = new Genre();

  constructor(
    private http: HttpClient, 
    private routeur: Router,
    private authService: AuthService,
    private service: EventsService,) 
    { }

  ngOnInit() {
     
    
     this.battleGroupe.visible_client  = false;
     this.bar.id=1;
     this.battleGroupe.bar=this.bar;
     this.genre.id=1;
     this.battleGroupe.genre=this.genre;
     this.http.get("http://localhost:8083/genres").subscribe(response =>{ this.genres =response});
  }

  addBattleGroupe(){
    const getelement = this.http.post('http://localhost:8083/battlegroupe', this.battleGroupe).toPromise();
    getelement.then(data => {
      this.routeur.navigate(['home_bar']);
    }

    );
  }

}
