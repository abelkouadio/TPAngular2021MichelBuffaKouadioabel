import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(Name,Action)
  {
    console.log("Name :"+Name +" "+Action);
  }
}
