import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-amis',
  templateUrl: './amis.component.html',
  styleUrls: ['./amis.component.css'],
  providers: [AuthService]
})
export class AmisComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private http : HttpClient
  ) { }
  data;

  ngOnInit() {
    const session = this.authService.getSession();
    
    this.http.get('http://localhost:8083/mesamis/'+session.id)    
    .subscribe(
        response => {
          this.data = response;
          console.log(response);         
        }
    );

  }

  getLogin() {
    return this.authService.getUser().login;
    //return JSON.parse(localStorage.getItem('user')).login;
  }

  logout() {
    console.log('Tentative de déconnexion');
    return this.authService.logout();  
  }

  hasAnyRole(roles: string[]) {
   

    return this.authService.hasAnyRole(roles);
  }

}
