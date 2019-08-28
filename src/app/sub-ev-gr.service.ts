import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubEvGrService {

  constructor(private http: HttpClient) { }

  getsubevent(id){
    return this.http.get("http://localhost:8083/inscrig/event/"+id);   
  }
  getnonsubevent(id){
    return this.http.get("http://localhost:8083/noninscrig/event/"+id);
  }
}
