import { Component, OnInit } from '@angular/core';
import { Groupe } from '../model/groupe';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-creationgroupe',
  templateUrl: './creationgroupe.component.html',
  styleUrls: ['./creationgroupe.component.css']
})
export class CreationgroupeComponent implements OnInit {

  Groupe:Groupe = new Groupe();
  constructor(private http: HttpClient, private routeur: Router) { }

  ngOnInit() {
  }
  addGroupe(){
    this.http.post('http://localhost:8083/addgroupe', this.Groupe)
    .subscribe(data =>{

    },err =>{
    console.log(err);
    });
    this.routeur.navigate(['login']);
  }
}
