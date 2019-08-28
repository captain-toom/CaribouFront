import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homeband',
  templateUrl: './homeband.component.html',
  styleUrls: ['./homeband.component.css'],
  providers: [AuthService]  
})
export class HomebandComponent implements OnInit {

  constructor(  
    private router: Router,
    private authService: AuthService,
    private http : HttpClient,) { }

  ngOnInit() {
  }

  getLogin() {
    return this.authService.getUser().login;
   // return JSON.parse(localStorage.getItem('user')).login;
  }
  
  logout() {
    console.log('Tentative de déconnexion');
  
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  hasAnyRole(roles: string[]) {
   

    return this.authService.hasAnyRole(roles);
  }
}
