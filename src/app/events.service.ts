import { Injectable } from '@angular/core';
import { BattleGroupe } from './model/BattleGroupe';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  event;
  constructor() {
  }

  getEvent(){
    return JSON.parse(localStorage.getItem('event'));
  }

  setEvent(event){
    localStorage.setItem('event',JSON.stringify(event));
    console.log(this.event);
  }
}
