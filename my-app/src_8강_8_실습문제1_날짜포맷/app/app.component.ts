import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  currentDate='20201208';   
  flag=' '; //공백 사용
 
  handleEvent(e){ //- 인지 / 인지 선택할것임
    this.flag = e; 
  }
} 
  