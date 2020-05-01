import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/Book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  title = "Aggiungi libro";

  newBook: Book;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.newBook = {
      ISBN: "",
      title: "",
      author: "",
      publisher: "",
      publicationDate: new Date(),
      coverUrl: ""

    }
  };

  add() {
    this.bookService.addBook(this.newBook),
    /* ripulisce campi dopo il submit */
    this.newBook = {
      ISBN: "",
      title: "",
      author: "",
      publisher: "",
      publicationDate: new Date(),
      coverUrl: ''
  }
  }
}
