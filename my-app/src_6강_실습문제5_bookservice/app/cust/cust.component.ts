import { Component, OnInit } from '@angular/core';
import {CustService} from './cust.service';

@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.css']
})
export class CustComponent implements OnInit {
//메세지를 리턴하는 함수 만들기
//생성자에서 주입, cust.service.module에 등록되어 export되어야함
  constructor(public service:CustService) { }
getMesg(){
  return this.service.currentDate();
}
  ngOnInit(): void {
  }
//html에서 출력되게끔
}
 