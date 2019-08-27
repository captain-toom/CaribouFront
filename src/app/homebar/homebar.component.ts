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
    console.log(bar.login)
    console.log(bar.id)
    // login donc son mail


    this.http.get('http://localhost:8083/bar/mail/'+ bar.login)    
    .subscribe(
        response => {
          console.log(response);
          this.mybar = response;
          console.log(this.mybar);
          console.log(this.mybar.id);
        }
    );  


    this.http.get('http://localhost:8083/battlegroupes/old1')    
    .subscribe(
        response => {
          console.log(response);
          this.myOldEvent = response;
        }
    );

    this.http.get('http://localhost:8083/battlegroupes/futur1')    
    .subscribe(
        response => {
          console.log(response);
          this.myFuturEvent = response;
        }
    );


  }



}
