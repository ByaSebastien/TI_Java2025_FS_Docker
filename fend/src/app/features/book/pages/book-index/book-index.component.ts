import {Component, inject} from '@angular/core';
import {BookService} from '../../../../services/book.service';
import {BookModel} from '../../../../models/book.model';

@Component({
  selector: 'app-book-index',
  imports: [],
  templateUrl: './book-index.component.html',
  styleUrl: './book-index.component.scss'
})
export class BookIndexComponent {
  private readonly _bookService: BookService = inject(BookService);

  books: BookModel[] = [];

  constructor() {
    this._bookService.getBooks().subscribe(books => {
      this.books = books;
    })
  }
}
