import { Component, OnInit } from '@angular/core';
//값을 받을려면 import가 돼야함
import {Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  title="부모 컴포넌트에서 데이터 전달";
  @Input() username:string; //username을 받아옴
  @Input() userage:number; //부모에서 보낸것을 자식에서 받았음
                            // child.html에서 뽑아야함
  constructor() { }

  ngOnInit(): void {
  }

}
