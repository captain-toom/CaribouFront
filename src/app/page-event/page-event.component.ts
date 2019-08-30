import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-event',
  templateUrl: './page-event.component.html',
  styleUrls: ['./page-event.component.css']
})

export class PageEventComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

 event;

  ngOnInit() {
   this.event = this.getEvent();  
  }

  getEvent() {
    return JSON.parse(localStorage.getItem('event'));
  }

  setEvent(event: any) {
    localStorage.setItem('event', JSON.stringify(event));
  }


}
