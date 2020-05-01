import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of } from 'rxjs';

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
  publisher: "Garzanti",
  publicationDate: new Date('2019/09/10'),
  coverUrl: 'assets/images/cover/il-piccolo-principe.jpeg'
}]

@Injectable({
  providedIn: 'root'
})
export class BookService {
  book: Book;
  selectedBook :Book;

  constructor() { }

  getBooks(): Observable <Book[]> {
    return of(books);
  }

  addBook(book: Book): void {
    books.push(book);
  }
  
   
}