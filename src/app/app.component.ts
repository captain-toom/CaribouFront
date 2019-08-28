import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';
import { Type } from '@angular/compiler';
import { AuthService } from './service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data;
  title = 'CaribouFront';
  mainnav=true;
  bandnav =false;
  barnav=false;
  clientnav=false;
  model: any = {};
  typeuser: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {

    
  }

 
    
}


