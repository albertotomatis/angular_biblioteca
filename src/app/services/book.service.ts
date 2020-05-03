import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of } from 'rxjs';

import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

let books: Book[] = [{
  ISBN: "978-88-304-5292-3",
  title: "Il pittore di anime",
  author: "Ildefondo Falcones",
  publisher: "Longanesi",
  publicationDate: new Date('2019/03/12'),
  coverUrl: 'assets/images/coverBook/il-pittore-di-anime.jpg'
},
{
  ISBN: "88-8112-067-4",
  title: "Full of life",
  author: "John Fante",
  publisher: "Fazi Editore",
  publicationDate: new Date('1998/02/06'),
  coverUrl: 'assets/images/coverBook/full-of-life.jpg'
},
{
  ISBN: "88-04-44247-6",
  title: "Il terzo gemello",
  author: "Ken Follet",
  publisher: "Mondadori",
  publicationDate: new Date('1996/11/05'),
  coverUrl: 'assets/images/coverBook/il-terzo-gemello.jpg'
},
{
  ISBN: "978-88-04-71990-8",
  title: "Marina",
  author: "Carlos Ruiz Zafon",
  publisher: "Mondadori",
  publicationDate: new Date('2019/09/10'),
  coverUrl: 'assets/images/coverBook/marina.jpg'
},
{
  ISBN: "9788811810742",
  title: "Il piccolo principe",
  author: "Antoine de Saint-Exupéry",
  publisher: "Bur",
  publicationDate: new Date('2019/09/10'),
  coverUrl: 'assets/images/coverBook/il-piccolo-principe.jpeg'
}]

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[];
  selectedBook: Book;

  constructor(private localStorage: LocalStorageService) { }


  getBooks(): Observable<Book[]> {
    this.books = this.localStorage.retrieve('books') || books;
    this.books = this.books != undefined ? this.books : [];
    return of(this.books);
  }

  addBook(book: Book) {
    this.books.push(book);
    this.localStorage.store('books', this.books);
  }

  saveBooksInLocalStorage() {
    this.localStorage.store('books', this.books);
  }


}