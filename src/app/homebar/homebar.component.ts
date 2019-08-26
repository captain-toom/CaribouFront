import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { HttpClient } from 'selenium-webdriver/http';



@Component({
  selector: 'app-homebar',
  templateUrl: './homebar.component.html',
  styleUrls: ['./homebar.component.css']
})
export class HomebarComponent implements OnInit {

  data;

  constructor(private http : HttpClient,) { }

  ngOnInit() {
    this.http.get('http://localhost:8083/battlegroupes')    
      .subscribe(
          response => {
            console.log(response);
            this.data = response;
          }
      )



  }




}
