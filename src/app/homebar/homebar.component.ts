import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-homebar',
  templateUrl: './homebar.component.html',
  styleUrls: ['./homebar.component.css']
})
export class HomebarComponent implements OnInit {

  allEvent;
  myAllEvent;
  my3OldEvent;
  my3FuturEvent;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    // 1 
    // avec l'id du bar en session
    this.http.get('http://localhost:8083/battlegroupes/old/1')    
      .subscribe(
          response => {
            console.log(response);
            this.my3OldEvent = response;
          }
      );

      this.http.get('http://localhost:8083/battlegroupes/futur/1')    
      .subscribe(
          response => {
            console.log(response);
            this.my3FuturEvent = response;
          }
      );

  }

}
