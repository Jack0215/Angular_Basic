import { Injectable } from '@angular/core';

import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class BookService {
//접속에 사용할 HttpClient를 생성자에 주입 
  constructor(public http:HttpClient) { }
  send(kkk){ //kkk는 검색어, 책의 이름을 찾을것임
    var url="http://localhost:3000/books"; //13라인 url을 14라인get(url)에 넣음
                    //파라미터를 전달할 객체, params란 변수에 저장
    const params = new HttpParams().set("name",kkk);
    if(kkk.length==0){ //검색어가 없는 경우
      return this.http.get(url).pipe(map(res=>res)); 
    }else{ //검색어가 있는 경우
    return this.http.get(url, {params}) 
    .pipe(map(res=>res));
    } //json 데이터를 받아와서 key와 val 값으로 변경해주는 역할을 한다.
  }
} 
