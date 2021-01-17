import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import {BookService} from './book.service';
import {Book} from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BookService]
})
export class AppComponent {
  title = 'my-app';
  items:Book[]; //받아온 데이터 저장 변수
  constructor(public service:BookService){

  }
  send(){
    this.service.send() //service에 있는 send 호출
    //비동기 통신 사용할 때 suc,fail 2개 있었는데 sub는 성공했을 때임
            //response 받아온 res를 this.items에 담음
    .subscribe(res=>{this.items=res;}, //, : 쉼표 뒤 error정의
    error=>console.log(error));
  } 
}
