import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth/auth.service';
import { Vote } from '../model/vote';
import { stringify } from 'querystring';
import { DataInscrit } from '../model/DataInscrit';

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
  datainscrits :DataInscrit =  new DataInscrit();
  votesVisible = false;
  lesvotes: Vote[];
  unvote : Vote;



  //autorisation de voter pour un groupe
  autoVote = false;
  test;
  v;
  adejavote = false;
  data;
  nbv = [];
  ngOnInit() {
    this.autoVote = false;
    this.adejavote = false;
    this.event = this.getEvent();
    const session = this.authService.getSession();
    const recupGroupe = this.http.get('http://localhost:8083/groupes/inscrits/valides/' + this.event.id).toPromise();
    recupGroupe.then(
      response => {

        this.http.get('http://localhost:8083/client/avote/' + session.id + '/' + this.event.id).subscribe(
          response => {
            this.data = response;
            console.log("a deja voté : " + this.data)
            this.adejavote = this.data;
            this.votesVisible = this.data;
          }
        );
        console.log("1: ");
        console.log(response);
        this.datainscrits.data = response;

      }, err => {
        console.log("BIJOUR" + err);
      });

  }
  getVotes() {
    console.log('datainscrit ' , this.datainscrits);
      this.datainscrits.data.forEach(element => { 
        console.log(this.event.id);
        console.log(element.id);
        const recupVote = this.http.get('http://localhost:8083/votes/battlegroupe/' + this.event.id + '/groupe/' + element.id).toPromise();   
        recupVote.then(
          response => {           
            this.datainscrits.nbv.push(response);
            console.log('LE VOTE: ', response)


          
            // console.log("je passe ici")
            // this.lesvotes.groupe.push(element);
            // console.log('les groupes :' );
            // console.log (element)
            // this.lesvotes.nbVote.push(Number(response)); 
            // console.log ('les votes : ');
            // console.log(this.lesvotes.nbVote);    
          }
        );
      });

      console.log('dainscrit fin ' , this.datainscrits)
      console.log("check2");
      console.log("Le groupe : " + this.lesvotes );
    

    console.log("bjr")
  }

  annulerVote() {
    const session = this.authService.getSession();
    const deletVote = this.http.delete('http://localhost:8083/votes/delete/battlegroupe/' + session.id + '/' + this.event.id).toPromise();
    deletVote.then(
      response => {
        this.data = response;
        console.log("a deja voté : " + this.data)
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
      const recupVote = this.http.post('http://localhost:8083/votes/battlegroupe/' + session.id + '/' + g.id + '/' + this.event.id, this.v).toPromise();
      recupVote.then(
        response => {
          console.log("vote enregistré");
          this.getVotes();
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
