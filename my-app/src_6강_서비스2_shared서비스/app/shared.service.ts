import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //공유테이버
  //부모 자식 간의 배열을 공유
  names:string[]=[];
  addName(n:string){
    this.names.push(n);
  }
  constructor() { }
}
