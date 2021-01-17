import { Component, Input, OnInit } from '@angular/core';
import { Stock } from '../stock';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
}) 
export class ChildComponent implements OnInit {
  @Input() iStock:Stock; //데이터를 받은게 iStock
  stockSymbol:string="";
  stockPrice:number=0; 

  handleEvent(){
    this.stockSymbol=this.iStock.stockSymbol    //app.co.ts의 값이 들어있음, 이를 11라인에 넘김
    this.stockPrice = this.iStock.stockPrice
  }

  constructor() { }

  ngOnInit(): void {
  }

}
