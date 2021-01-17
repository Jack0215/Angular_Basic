import { Component, Input, OnInit } from '@angular/core';
import { Stock } from '../stock';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit { 

  @Input() iStock:Stock[];
  showStrocks:Stock[]; //화면에 보여줄것을 선언

  handleEvent(){      //받아온 애
   this.showStrocks = this.iStock;
   //↑값을 화면에 뿌려주면 됨
  }  
  constructor() { }
  ngOnInit(): void {  }
}
