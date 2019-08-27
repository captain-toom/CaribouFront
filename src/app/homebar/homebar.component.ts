import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { HttpClient } from '@angular/common/http';
import { Bar } from '../model/Bar';
import { AuthService } from '../service/auth/auth.service';



@Component({
  selector: 'app-homebar',
  templateUrl: './homebar.component.html',
  styleUrls: ['./homebar.component.css'],
  providers: [AuthService]
})
export class HomebarComponent implements OnInit {

  allEvent;
  myAllEvent;
  myOldEvent;
  myFuturEvent;
  mybar;
  addresse : String;
  constructor(
    private http : HttpClient,
    private authService: AuthService
    
    ) { }

  

  ngOnInit() {
    const session = this.authService.getSession()
    console.log(session);
    console.log(session.login)
    console.log(session.id)
    // login donc son mail

    this.http.get('http://localhost:8083/battlegroupes/old'+session.id)    
    .subscribe(
        response => {
          console.log(response);
          this.myOldEvent = response;
        }
    );
      
    this.http.get('http://localhost:8083/battlegroupes/futur'+session.id)    
    .subscribe(
        response => {
          console.log(response);
          this.myFuturEvent = response;
        }
    );







  }



}
