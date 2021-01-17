import { Component } from '@angular/core';
import { BookService } from './book/book-service.service';
import {Book} from './book/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = '도서 목록'; 

  books:Book[];

  constructor(public BookService:BookService){
    this.books=BookService.bookList();
  }
 

  }  