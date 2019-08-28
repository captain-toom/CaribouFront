import { Component, OnInit } from '@angular/core';
import { BattleGroupe } from '../model/BattleGroupe';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  event:BattleGroupe=new BattleGroupe();
  constructor(private service: EventsService) { }

  ngOnInit() {
    this.event = this.service.getEvent();
  }

}
