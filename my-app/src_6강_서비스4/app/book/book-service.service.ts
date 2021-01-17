import { Injectable } from '@angular/core';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  books:Book[]=[
    {id:"p01",name:"위험한식탁",price:3000,date:"20180202",img:"a.jpg"},
    {id:"p02",name:"공부의 비결",price:4000,date:"20190202",img:"b.jpg"},
    {id:"p03",name:"오메르타",price:5000,date:"20200202",img:"c.jpg"},
    {id:"p04",name:"행복한 여행",price:6200,date:"20180302",img:"d.jpg"},
    {id:"p05",name:"해커스 토익",price:4200,date:"20180402",img:"e.jpg"},
    {id:"p06",name:"여행안내서",price:1000,date:"20180502",img:"f.jpg"}
  ];
  bookList():Book[]{ //book.compo.ts에서 소환 및 리턴값 받음
    return this.books;
  }
}
