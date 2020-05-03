import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  title = "Aggiungi un libro";

  newBook: Book;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.newBook = {
      ISBN: "",
      title: "",
      author: "",
      publisher: "",
      publicationDate: new Date(),
      coverUrl: 'assets/images/cover.png'

    }
  };

  add() {
    this.bookService.addBook(this.newBook);
    this.newBook = {
      ISBN: "",
      title: "",
      author: "",
      publisher: "",
      publicationDate: new Date(),
      coverUrl: 'assets/images/cover.png'
    }
  }

}
