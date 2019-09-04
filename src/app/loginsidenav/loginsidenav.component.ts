import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsidenav',
  templateUrl: './loginsidenav.component.html',
  styleUrls: ['./loginsidenav.component.css'],
  providers: [AuthService]
})
export class LoginsidenavComponent implements OnInit {
  
  data;
  model: any = {};
  typeuser: any;
  connect: boolean;
  msgUnknownUser : string;
  msgMdpInvalid : string;
  

  constructor( private http: HttpClient,
    private router: Router,
    private authService: AuthService) {  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }
  login() {    
    this.msgUnknownUser = null;
    const verifUser = this.http.get('http://localhost:8083/connexion/request/' + this.model.username + '/' + this.model.password).toPromise();
    verifUser.then(res => {
      this.data = res;  // solution pour utiliser data after mais attention a quant tu l'utilise !
      console.log("arthur dans la sauce 1", this.data);
      if (res == false){
        
        this.msgMdpInvalid = "Mail ou mot de passe incorrect.";
      }

      // première solution -----------------------------------------------------------------------------------------------
      this.http.get('http://localhost:8083/connexion/type/' + this.model.username, { responseType: 'text' }).subscribe(
        resu => {
          if (res == true) {

            console.log("fuk of 1", JSON.stringify(resu));

            if (resu == 'client') {
              this.model.typeuser = "client";
              localStorage.setItem('type', JSON.stringify("client"));
              localStorage.setItem('user', JSON.stringify({ login: this.model.username }));
              this.authService.login(this.model);
            }
            if (resu == 'bar') {
              this.model.typeuser = "bar";
              localStorage.setItem('user', JSON.stringify({ login: this.model.username }));
              this.authService.login(this.model);
            }
            if (resu == 'groupe') {
              this.model.typeuser = "groupe";
              localStorage.setItem('user', JSON.stringify({ login: this.model.username }));
              this.authService.login(this.model);
              
            }
          }
          else {
            console.log("TYPE DE CONNEXION INCONNU");         
     
            
            
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
