import { Book } from "./book.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({providedIn: "root"})
export class BooksService {
  booksChanged = new Subject<Book[]>();
  wishlistChanged = new Subject<Book[]>();
  bookSelected = new Subject<number>();

    private books: Book [] = [
    new Book(
      'Nakręcana dziewczyna. Pompa numer sześć',
      'https://ecsmedia.pl/c/nakrecana-dziewczyna-pompa-numer-szesc-b-iext121707298.jpg',
      'Bacigalupi Paolo'),
    new Book(
      'Wy wszyscy moi ja',
      'https://s.lubimyczytac.pl/upload/books/309000/309231/754449-352x500.jpg',
      'Brzeziński Miłosz'),
    new Book (
      'Mężczyzna który pomylił swoją żonę z kapeluszem',
      'https://upolujebooka.pl/_data_cache/_data/offer/013/190_290_0_0_0_1_127416-mezczyzna__ktory_pomylil_swoja_zone_z_kapeluszem.jpg',
      'Sacks Olivier')
  ];

    private wishlist: Book [] = [
      new Book(
        'Moja wymarzona książka',
        'https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg',
        'Kowalski Jan'
      ),
      new Book (
        'Test',
        'https://img.tantis.pl/image/87fe2194-77c5-4abd-8a75-4e87de46df07/550x400/webp',
        'Związek Szkółkarzy'
      )
    ]

  getBooks() {
    return this.books.slice();
  }

  addNewBooks(book: Book){
        this.books.push(book);
        this.booksChanged.next(this.books.slice());
  }

  addToWishlist(book: Book) {
      this.wishlist.push(book);
      this.wishlistChanged.next(this.wishlist.slice());
  }

  getWishlist() {
      return this.wishlist.slice();
  }

  delete (id: number) {
      this.wishlist.splice(id, 1);
      this.wishlistChanged.next(this.wishlist.slice());
  }




}
