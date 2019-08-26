import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  login(loginForm: any) {
    console.log('Tentative de connexion');

    this.setUser({login : loginForm.username});
   

    console.log(this.setUser({login : loginForm.type}));

    // On récupère l'url de redirection
    const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/home';
    const redirectUrlBand = this.route.snapshot.queryParams['redirectUrl'] || '/home_band';
    const redirectUrlBar = this.route.snapshot.queryParams['redirectUrl'] || '/home_bar';

    // On accède à la page souhaitée

    


    this.router.navigate([redirectUrl]);
  }

  logout() {
    console.log('Tentative de déconnexion');

    this.clearUser();
    this.router.navigate(['/login']);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearUser() {
    localStorage.removeItem('user');
  }

}