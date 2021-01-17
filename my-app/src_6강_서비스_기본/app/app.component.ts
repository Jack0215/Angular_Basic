import { Component } from '@angular/core';
import {HelloService} from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HelloService] //서비스 provider등록
})
export class AppComponent {
  title = 'my-app';
  //생성자를 이용한 의존성 주입
  constructor(public helloService:HelloService){ //타입은 8라인 provides의 HelloService
                    //↑사용할 수 있는 이름

  }
}
