import { Component } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: any = [];
  
  public a: any = "";

  constructor(private _booksService: BooksService) {
    _booksService.getBooks().subscribe(
      (data: any) => {
        this.books = [data];
        // this.books = [data.data.books];
        console.log(this.books)
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }

  // sort method

  // titleOrder() {
  //   this.books.data.books.sort((a:any, b:any) => {
  //     const titleA = a.data.books[0].title.toUpperCase();
  //     const titleB = b.data.books[0].title.toUpperCase();
  //     if (titleA < titleB) {
  //       return -1;
  //     }
  //     if (titleB > titleA) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }

  titleOrder() {
    this.books.b.books.sortBy((x: any, y: any) => {
      if (x.title < y.title)
        return -1;  
      if (x.title > y.title)
        return 1;
      return 0;

    });
  }

}
