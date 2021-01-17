import { Component } from '@angular/core';
import {Stock} from './stock';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = '인터페이스를 이용한 데이터 전달 실습';
  myStocks:Stock[]=[ //myStocks만 자식으로 넘겨주면 됨
    {stockSymbol:'Java', stockPrice:100},
    {stockSymbol:'Angular', stockPrice:200},
    {stockSymbol:'Oracle', stockPrice:300},
    {stockSymbol:'ECMAScript', stockPrice:400}
];
}

