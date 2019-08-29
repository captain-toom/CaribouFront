import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService]  
})
export class HomeComponent implements OnInit {
  FuturEvent;
  constructor(
    private router: Router,
    private authService: AuthService,
    private http : HttpClient,
  ) { }

  inscrire(){
    console.log("BJR");
  }

  ngOnInit() {
    this.http.get('http://localhost:8083/battlegroupes/client')    
    .subscribe(
        response => {
          console.log(response);
          this.FuturEvent = response;
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
    //localStorage.removeItem('user');
   // localStorage.removeItem('type');
    //this.router.navigate(['/login']);
  }

  hasAnyRole(roles: string[]) {
   

    return this.authService.hasAnyRole(roles);
  }

}
