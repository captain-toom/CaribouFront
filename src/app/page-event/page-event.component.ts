import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth/auth.service';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-page-event',
  templateUrl: './page-event.component.html',
  styleUrls: ['./page-event.component.css']
})

export class PageEventComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  event;
  datainscrits
  votesVisible = false;



  //autorisation de voter pour un groupe
  autoVote = false;
  test;
  v;
  adejavote = false;
  data;
  ngOnInit() {
    this.event = this.getEvent();
    const session = this.authService.getSession();
    const recupGroupe = this.http.get('http://localhost:8083/groupes/inscrits/valides/' + this.event.id).toPromise();
    recupGroupe.then(
      response => {

        this.http.get('http://localhost:8083/client/avote/'+session.id +'/'+this.event.id ).subscribe(
          response => {
            this.data = response;
            console.log("a deja voté : "+this.data)
            this.adejavote = this.data;
            this.votesVisible = this.data;
          }
        );
        console.log(response);
        this.datainscrits = response;
      }, err => {
        console.log("BIJOUR" + err);
      });

  }

  getNbVotes(g){
    console.log("check1");
    if( (this.adejavote == true) && (this.votesVisible==true)){
      console.log("check2");
      console.log("Le groupe : "+ g.id);      
    }else{
      return 0;
    }
    
  }

  annulerVote(){
    const session = this.authService.getSession();
    const deletVote = this.http.delete('http://localhost:8083/votes/delete/battlegroupe/'+session.id +'/'+this.event.id ).toPromise();
      deletVote.then(
        response =>  {
          this.data = response;
          console.log("a deja voté : "+this.data)
          this.adejavote = false;
          this.votesVisible = false;
        });      
  }

  getEvent() {
    return JSON.parse(localStorage.getItem('event'));
  }

  getLogin() {
    return this.authService.getUser().roles;
    //return JSON.parse(localStorage.getItem('user')).login;
  }
  vote(g) {
    if (this.getLogin() == 'CLIENT') {
      console.log("Client connecté, vote autorisé")
      const session = this.authService.getSession();
      console.log("info post")
      console.log("client" + session.id)
      console.log("event" + this.event.id)
      console.log("groupe" + g.id)
      const recupVote = this.http.post('http://localhost:8083/votes/battlegroupe/' + session.id + '/' + g.id + '/' + this.event.id, this.v).toPromise();
      recupVote.then(
        response => {
          console.log("vote enregistré");
          this.ngOnInit();
        },
        err => {
          console.log("erreur : " + err);
        }
      );

    }
  }

  setEvent(event: any) {
    localStorage.setItem('event', JSON.stringify(event));
  }


}
