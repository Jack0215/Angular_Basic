import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //선택자
  //back-tick `사용, template로 변경, style로 변경
  template:`
  <table>
  <tr>
  <td><h1>홍길동</h1><td>
  </tr>
  </table>
  `,
  styles:[
    `h1{
      color:red;
    }`,
    `h2{
      background:yellow;
    }`
  ]
})
export class AppComponent {
  title = 'my-app';
}
