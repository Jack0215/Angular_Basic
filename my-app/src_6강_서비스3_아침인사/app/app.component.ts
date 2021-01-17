import { Component } from '@angular/core';
import { MorningServiceService } from './morning-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MorningServiceService]
})
export class AppComponent {
  title = 'my-app';
  //주입
  constructor(public service:MorningServiceService){}
  mesg="";
  country_code="KR"
  //1.MorningService생성
  //2.코드를 받아서 인사말을 반환하는 메서드 작성 : morning(){}
  handleEvent(code):void{
    this.country_code=code.target.value;
    this.mesg=this.service.morning(this.country_code); 
  }

}
