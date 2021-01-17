import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class BookService {
//접속에 사용할 HttpClient를 생성자에 주입
  constructor(public http:HttpClient) { }
  send(){ //공통로직 사이트 접속 데이터 받기
    var url="http://localhost:3000/books"; //13라인 url을 14라인get(url)에 넣음
    return this.http.get(url)
    .pipe(map(res=>res)); //json 데이터를 받아와서 key와 val 값으로 변경해주는 역할을 한다.
  }
} 
