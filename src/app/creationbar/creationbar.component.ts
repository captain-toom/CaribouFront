import { Component, OnInit } from '@angular/core';
import { Bar } from '../model/Bar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creationbar',
  templateUrl: './creationbar.component.html',
  styleUrls: ['./creationbar.component.css']
})
export class CreationbarComponent implements OnInit {

  Bar:Bar = new Bar();

  constructor(private http: HttpClient, private routeur: Router) { }

  ngOnInit() {
  }
  addBar(){
    this.http.post('http://localhost:8083/addbar', this.Bar)
    .subscribe(data =>{

    },err =>{
    console.log(err);
    });
    this.routeur.navigate(['login']);
  }
}
