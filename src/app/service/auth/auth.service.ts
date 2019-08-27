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

    //On récupère le nom d'utilisateur ainsi que son type, et on utilise le type pour une redirection différente :)
    this.setUser({ login: loginForm.username });
    this.setTypeUser({ type: loginForm.typeuser });
    this.typeconnect = this.getTypeUser().type;




    if ((this.typeconnect == "client") == true) {
      this.setUser({ login: loginForm.username, roles: "CLIENT" });
      const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/home';
      this.router.navigate([redirectUrl]);
      console.log("passage client")

    } else if (this.typeconnect == "bar") {
      this.setUser({ login: loginForm.username, roles: "BAR" });
      const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/home_bar';
      this.router.navigate([redirectUrl]);

    } else if (this.typeconnect == "groupe") {
      this.setUser({ login: loginForm.username, roles: "GROUPE" });
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

  // METHODE DE VERIFICATION DES DROITS => cette fonctione retourne true ou fale => si un client veut se connecter sur page bar, renvoie false
  hasAnyRole(roles: string[]) {
    const user = this.getUser();
    if (user.roles == roles) {
      return true;
    }
    return false;
  }

}