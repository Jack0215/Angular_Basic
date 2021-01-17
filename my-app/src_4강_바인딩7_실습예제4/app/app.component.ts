import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  count=0;
  handleEvent(event):void{
    this.count = event.target.value; 
  }     
} 
