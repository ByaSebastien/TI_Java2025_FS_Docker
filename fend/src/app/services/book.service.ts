import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookModel} from '../models/book.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly _http: HttpClient = inject(HttpClient);

  constructor() { }

  getBooks() {
    return this._http.get<BookModel[]>('/api/book');
  }
}
