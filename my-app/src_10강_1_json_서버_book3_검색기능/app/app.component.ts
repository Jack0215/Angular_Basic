import { Component } from '@angular/core';
import {BookService} from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService]
})
export class AppComponent {
  title = 'my-app';
  items; //검색한 것 저장

  constructor(public service:BookService){

  }
  send(kkk){      //app.compo.html에 인자를 생성했으므로 여기서 인자가 들어가야한다.
    this.service.send(kkk).
    //비동기 통신 사용할 때 suc,fail 2개 있었는데 sub는 성공했을 때임
            //response 받아온 res를 this.items에 담음
    subscribe(res=>{this.items=res;}, //, : 쉼표 뒤 error정의
    error=>console.log(error));
  }
}
