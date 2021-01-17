import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  items:Object[]=[
    {name:"홓길동",age:20},
    {name:"이순신",age:30},
    {name:"유관순",age:40}
  ]
}
