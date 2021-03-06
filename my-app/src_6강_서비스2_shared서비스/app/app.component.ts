import { Component } from '@angular/core';
import {SharedService} from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SharedService]
})
export class AppComponent {
  title = 'my-app';
  constructor(public service:SharedService){}
  addName(n:string){
    this.service.addName(n);
    console.log(this.service.names);  
  } 
}
