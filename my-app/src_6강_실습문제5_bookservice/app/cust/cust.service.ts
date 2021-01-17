import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustService {

  constructor() { }
  //모듈을 import해서 사용하는 실습, 모듈은 cust.com.ts에서 사용
  //공통로직 생성
  //공통로직에 날짜 함수 생성
  
  currentDate():Date{
    return new Date()
  }
}
 