import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '이벤트 바인딩 실습'; 
  handleEvent1():void{
    console.log("handleEvent1");
  } 
  handleEvent2(name:string):void{
    console.log("handleEvent2",name);
  }
}
