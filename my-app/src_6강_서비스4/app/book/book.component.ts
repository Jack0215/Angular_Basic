import { Component, Input, OnInit } from '@angular/core';
import { BookService } from './book-service.service';
import {Book} from './book';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers:[BookService]

})
export class BookComponent implements OnInit {
@Input () booklist:[];
@Input () title:string;
 
 books:Book[];
  constructor(public service:BookService) {  
  this.books =service.bookList(); 
  
  }
  ngOnInit(): void {
  } 

}  