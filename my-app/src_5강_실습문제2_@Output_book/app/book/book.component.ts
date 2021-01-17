import { Component, Input, OnInit } from '@angular/core';
import { Book } from './book';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() title:string;
  @Input() bookList:Book[];
  @Output() customEvent = new EventEmitter(); 
  //아웃풋에 ,,, customEvent받는쪽 app.compo.html

  send(name){ //센드는 콘솔에 책 이름한번 찍어봄 
    this.customEvent.emit(name); 
    //emit이 호출되는 순간 부모한테 데이터 전달()에 책의 이름을 넣으면 
    //이름을 부모에게 전달하게됨
  }
  constructor() { }

  ngOnInit(): void {
  }

} 