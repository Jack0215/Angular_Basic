//다른 로직이 공통으로 사용할 서비스 구현
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }
  //다른곳에서 사용가능한 공통로직(서비스) 구현
  sayHello():string{
    return "Hello";
  }
}
