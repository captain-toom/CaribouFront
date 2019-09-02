import { Injectable } from '@angular/core';
import { BattleGroupe } from './model/BattleGroupe';
import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class EventsService {
  event;
  constructor(
    private router : Router

  ) {
  }

  getEvent(){
    return JSON.parse(localStorage.getItem('event'));
  }

  setEvent(event){
    localStorage.setItem('event',JSON.stringify(event));    
    console.log(this.event);
    this.router.navigate(['home_bar/edit_event']);
      
  }
}
