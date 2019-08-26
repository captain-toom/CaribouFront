import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subscribe-event-groupe',
  templateUrl: './subscribe-event-groupe.component.html',
  styleUrls: ['./subscribe-event-groupe.component.css']
})
export class SubscribeEventGroupeComponent implements OnInit {
  events;
  test;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:8083/battlegroupesfutur").subscribe(response =>{ this.events =response});
    
  }
openevent(e){
  console.log(e);
}

}
