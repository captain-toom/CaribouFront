import { Injectable } from '@angular/core';
import { BattleGroupe } from './model/BattleGroupe';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  event: BattleGroupe;
  constructor(event: BattleGroupe) {
    this.event=event;
  }

  getEvent(){
    return this.event;
  }
}
