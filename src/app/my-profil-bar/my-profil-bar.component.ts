import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profil-bar',
  templateUrl: './my-profil-bar.component.html',
  styleUrls: ['./my-profil-bar.component.css']
})
export class MyProfilBarComponent implements OnInit {
User;
data;
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router,
    ) { }

  ngOnInit() {
    console.log("ouvre my profil");
    const session = this.authService.getSession() 
    this.User = session;
    console.log(this.User);
  }

  logout() {
    console.log('Tentative de déconnexion');
    return this.authService.logout();
  }






  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  getSession() {
    return JSON.parse(localStorage.getItem('session'));
  }
  setSession(session: any) {
    localStorage.setItem('session', JSON.stringify(session));
  }
 

  modifyProfil(){    
    console.log("modification de profil bar");
    console.log(this.User);
    this.http.post('http://localhost:8083/baredit', this.User)
    .subscribe(data =>{
    },err =>{
    console.log(err);
    }); 

    //mettre a jour la session
    console.log("avant maj");
    console.log(this.User);
    this.http.get('http://localhost:8083/bar/mail/'+this.getUser().login)
    .subscribe(
      response => {
        this.data = response;
        this.setSession({id: this.data.id, mail : this.data.mail, photo : this.data.photo, nom : this.data.nom, nomGerant : this.data.nomGerant, tel : this.data.tel, capacitemax : this.data.capacitemax });
        }
        );
    
    console.log("apres maj session");
    console.log(this.User);  

 

    // renvoyer vers home
    console.log("juste avant de renvoyer vers home");
    console.log(this.User);
    this.router.navigate(["home_bar"]);
}
}
