import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '바인딩 실습';
  flag=false; //전체 선택 checkbox 상태값 설정
  callPhone(p:string):void{
    console.log(p);  
  }

  change(f:string):void{
    console.log(f);
  }
 
  check(aa:boolean):void{ 
    console.log(aa);
    this.flag=aa;     
  } 
  
}   
 
