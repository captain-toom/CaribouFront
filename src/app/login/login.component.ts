import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Type } from '@angular/compiler';
import { AuthService } from '../service/auth/auth.service';

import { map, tap } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  data;
  model: any = {};
  typeruser: string;
  connect: boolean;


  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    //#region ici il ya ton ancien code ARTHUR ALIAS SHELBY
    /* console.log('Tentative de connexion');
     console.log(this.model.username);
     console.log(this.model.password);
     this.http.get('http://localhost:8083/connexion/request/' + this.model.username + '/' + this.model.password)
       .subscribe(
         response => {
           this.data = response;
           console.log("aaa"+ response);
           console.log("a"+ this.data);
         }
       );
       console.log( "boolean true or false verif co" , this.data);
 
     // if (this.data == true) {
     //   this.http.get('http://localhost:8083/connexion/type/' + this.model.username)
     //     .subscribe(
     //       response2 => {
     //         this.typeruser = response2;
     //         console.log("bbb" +response2);
     //          //if (this.typeruser == 'client') {
     //         //   localStorage.setItem('user', JSON.stringify({ login: this.model.username }));
     //         //   this.authService.login(this.model);
     //         //   this.router.navigate(['/home']);
     //         // }
 
     //       }
     //     );
     // }
 
     // Vérifier que login/mdp sont correctes, par exemple par une requête à un service REST
 */
    //#endregion

    //#region debut première solution

    const verifUser = this.http.get('http://localhost:8083/connexion/request/' + this.model.username + '/' + this.model.password).toPromise();
    verifUser.then(res => {
      this.data = res;  // solution pour utiliser data after mais attention a quant tu l'utilise !
      console.log("arthur dans la sauce 1", this.data);

      // première solution -----------------------------------------------------------------------------------------------
      this.http.get('http://localhost:8083/connexion/type/' + this.model.username, { responseType: 'text' }).subscribe(
        resu => {
          if (res == true) {
            console.log("fuk of 1", JSON.stringify(resu));

            if (resu == 'client') {              
              localStorage.setItem('user', JSON.stringify({ login: this.model.username }));            
              this.authService.login(this.model.username);              
            }

            
            if (resu == 'bar') {
              this.model.type = 'bar';
              localStorage.setItem('user', JSON.stringify({ login: this.model.username }));
              this.authService.login(this.model);
             
            }

            
            if (resu == 'groupe') {
              this.model.type = 'client';
              localStorage.setItem('user', JSON.stringify({ login: this.model.username }));
              this.authService.login(this.model);
              
            }

          }
          else {
            console.log("fuk on 1");
          }
        }
      );
      //#endregion fin premiere solution--------------------------------------------------------------------------------------------
      // this.laSuiteJeSaisPasCommentTuVeuxLAppeler(res); // deuxième solution (appel fuction)


    });

  }


  //#region debut fonction deuxième solution
  // laSuiteJeSaisPasCommentTuVeuxLAppeler(verif) {
  //   console.log("arthur dans la sauce 2 ", verif);
  //   if (verif == true) {
  //     this.http.get('http://localhost:8083/connexion/type/' + this.model.username, { responseType: 'text' }).subscribe(
  //       res => {
  //         console.log('fuk of 2', JSON.stringify(res));
  //         this.typeruser = JSON.stringify(res);
  //         console.log("cet utilisateur est un" + this.typeruser);

  //         if(this.typeruser=='client'){
  //           localStorage.setItem('user', JSON.stringify({ login: this.model.username }));
  //         this.authService.login(this.model);
  //         this.router.navigate(['/home']);
  //         }          
  //       }
  //     )
  //   }
  //   else {
  //     console.log("fuk on 2");
  //   }
  // }
  //#endregion
}
