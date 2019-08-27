import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class AuthService {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }
  typeconnect: String;
  login(loginForm: any) {
    console.log('Tentative de connexion');

    this.setUser({ login: loginForm.username });
    this.setTypeUser({ type: loginForm.typeuser });

    this.typeconnect = this.getTypeUser().type;


    console.log(JSON.stringify(this.typeconnect));
    console.log("client" == "client")
    console.log(this.getTypeUser());

    // On récupère l'url de redirection
    console.log("IS THIS GOING ON");
    console.log(this.typeconnect == "client");

    if ((this.typeconnect == "client") == true) {
      const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/home';
      this.router.navigate([redirectUrl]);
      console.log("passage client")

    } else if (this.typeconnect == "bar") {

      const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/home_bar';
      this.router.navigate([redirectUrl]);

    } else if (this.typeconnect== "groupe") {

      const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/home_band';
      this.router.navigate([redirectUrl]);

    } else {

      const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/login';
      this.router.navigate([redirectUrl]);
      console.log("ECHEC DE CONNEXION");
      
    }



    // On accède à la page souhaitée  
  }

  logout() {
    console.log('Tentative de déconnexion');
    this.clearUser();
    this.clearTypeUser();
    this.router.navigate(['/login']);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getTypeUser() {
    return JSON.parse(localStorage.getItem('type'));
  }

  setTypeUser(type: any) {
    localStorage.setItem('type', JSON.stringify(type));
  }

  clearUser() {
    localStorage.removeItem('user');
  }
  clearTypeUser() {
    localStorage.removeItem('type');
  }

}