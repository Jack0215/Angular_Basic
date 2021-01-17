import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  guess=0; //예측값 kkk.value
  original; //정답
  deviation; //정답 - 예측값
  noOftries ;  //시도 횟수
  constructor(){
    this.original = Math.floor(Math.random()*10+1);
    console.log("정답=="+this.original); 
  this.deviation=0;
  this.noOftries=0;
  }
  ok(guess){
    this.guess=guess;
    this.deviation=this.original-this.guess; //0보다 큰지 작은지
    this.noOftries=this.noOftries+1; //시도횟수 1씩 증가
  }
  restart(){
    this.guess=0;
    this.noOftries=0;
    this.deviation=0; 
    this.original = Math.floor(Math.random()*10+1); 
    console.log("정답=="+this.original); 
  } 
}
