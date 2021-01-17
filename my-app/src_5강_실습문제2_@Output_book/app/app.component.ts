import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected_name = ""; 
  title = "도서 목록"; //자식에게 전송

  books =[{id:'p01', name:'위험한 식탁', price:2000, date:'20190401', img:'a.jpg'},
    {id:'p02',name:'공부의 비결',price:3000,date:'20170402',img:'b.jpg'},
    {id:'p03',name:'오메르타',   price:2500,date:'20170401',img:'c.jpg'},
    {id:'p04',name:'행복한 여행',price:4000,date:'20170401',img:'d.jpg'},
    {id:'p05',name:'해커스 토익',price:2000,date:'20170401',img:'e.jpg'},
    {id:'p06',name:'도로 안내서',price:2000,date:'20170401',img:'f.jpg'},
  ]; //자식에게 전송

  handleEvent(event){ //(event)받아서
    this.selected_name= event; // 받아온 event를 selected_name에 설정
  }

  } 