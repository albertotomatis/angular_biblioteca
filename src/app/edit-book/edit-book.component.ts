import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  title = "Modifica";

  constructor(public service: BookService) { }
  selectedBook: Book;

  ngOnInit(): void {

  }

  save(): void {
    this.service.selectedBook = null;
  }

}