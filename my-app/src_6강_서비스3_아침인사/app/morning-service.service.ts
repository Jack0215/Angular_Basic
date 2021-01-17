import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MorningServiceService {

  constructor() { }

  //서비스는 코드를 받아서 코드에 맞는 mesg를 리턴하게 설정
  morning(code:string):string{
    var mesg="";
    if(code=="KR"){
      mesg="안녕하세요. 좋은 아칩입니다."
    }else if(code=="US"){
      mesg="Good Morning"
    }else if(code=="CN"){
      mesg="早安"
    }
    return mesg;  
  }
} 
