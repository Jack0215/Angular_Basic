import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = "이벤트 바인딩 실습예제3";
  count=""; 
  handleEvent(m){
    this.count = m.target.value; 
  } 
}

// ngOnInit(): void{}
