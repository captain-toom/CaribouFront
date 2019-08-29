import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-my-profil-bar',
  templateUrl: './my-profil-bar.component.html',
  styleUrls: ['./my-profil-bar.component.css']
})
export class MyProfilBarComponent implements OnInit {
User;
  constructor(
    private authService: AuthService,
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

}
