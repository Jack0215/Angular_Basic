import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my'
})
export class MyPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if(value.length==8 && args != undefined){ //args = / 표시 혹은 - 표시
    return value.substring(0,4)+args+value.substring(4,6)
    +args+value.substring(6,8);
      //연도, 연 월 뒤에 구분해 놓은 기호가 나와야한다.
  }
  }
}
