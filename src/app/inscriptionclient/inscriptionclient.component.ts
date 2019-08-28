import { Component, OnInit } from '@angular/core';
import { Client } from '../model/Client'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscriptionclient',
  templateUrl: './inscriptionclient.component.html',
  styleUrls: ['./inscriptionclient.component.css']
})
export class InscriptionclientComponent implements OnInit {
  Client:Client = new Client();
  constructor(private http: HttpClient, private routeur: Router) { }
  nomprenom:String;

  ngOnInit() {

    

  }

  addClient(){
    this.http.post('http://localhost:8083/addclient', this.Client)
    .subscribe(data =>{

    },err =>{
    console.log(err);
    });
    this.routeur.navigate(['login']);
  }
  
}
