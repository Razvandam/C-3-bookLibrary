// books.component.ts
import { Component } from '@angular/core';

export interface Book {
  id: number;
  name: string;
  author: string;
  readTime: number;
  type: string;
  price: number;
  ratings: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  books:Book[] = [
    {
      id: 1,
      name: 'JavaScript for beginners Book',
      author: 'Mr. JS Expert',
      readTime: 30,
      type: 'Beginner',
      price: 0.0,
      ratings: 3.5,
      image: 'assets/books/book-1.jpg',
      description:
        'In this book you will read and learn the fundamentals of JavaScript. After reading this book you can feel confident to continue working with some JavaScript Frameworks and make basic websites',
    },
    {
      id: 2,
      name: 'Angular for beginners Book',
      author: 'Dr. Angular',
      readTime: 25,
      type: 'Medium',
      price: 100.0,
      ratings: 4.5,
      image: 'assets/books/book-2.jpg',
      description:
        'In this book you will read and learn the fundamentals of Angular. After reading this book you will be able to build and mantain basic websites',
    },
    {
      id: 3,
      name: 'React for beginners Book',
      author: 'Mr. React Expert',
      readTime: 30,
      type: 'Beginner',
      price: 0.0,
      ratings: 4.2,
      image: 'assets/books/book-3.jpg',
      description:
        'In this book you will read and learn the fundamentals of React. After reading this book you can feel confident to continue working with some JavaScript Frameworks and make basic websites',
    },
    {
      id: 4,
      name: 'Advanced Angular Book',
      author: 'Mr. JS Expert',
      readTime: 50,
      type: 'Advanced',
      price: 0.0,
      ratings: 4.8,
      image: 'assets/books/book-4.jpg',
      description:
        'In this book you will read and learn the Advanced principles of Angular. After reading this book you can feel confident to continue working with Angular and create advanced websites',
    },
    {
      id: 5,
      name: 'JavaScript Book',
      author: 'Mr. JS Expert',
      readTime: 30,
      type: 'Beginner',
      price: 0.0,
      ratings: 3.5,
      image: 'assets/books/book-5.jpg',
      description:
        'In this book you will read and learn advanced JavaScript. After reading this book you can feel confident to continue working with all JavaScript Frameworks and make complex websites',
    },
    {
      id: 6,
      name: 'Angular with Java Applications',
      author: 'Mr. JS Expert',
      readTime: 30,
      type: 'Advanced',
      price: 140.0,
      ratings: 3.5,
      image: 'assets/books/book-6.jpg',
      description:
        'In this book you will read and learn the fundamentals of Angular. After reading this book you can feel confident to continue working with Angular and building advanced websites',
    },
    {
      id: 7,
      name: 'Advanced React Book',
      author: 'Mr. JS Expert',
      readTime: 45,
      type: 'Advanced',
      price: 120.0,
      ratings: 4.5,
      image: 'assets/books/book-7.jpg',
      description:
        'In this book you will read and learn advanced React. After reading this book you can feel confident to continue working with React and make advanced websites',
    },
    {
      id: 8,
      name: 'NodeJS for beginners',
      author: 'Mr. JS Expert',
      readTime: 30,
      type: 'Beginner',
      price: 0.0,
      ratings: 3.5,
      image: 'assets/books/book-8.jpg',
      description:
        'In this book you will read and learn the fundamentals of NodeJS. After reading this book you can feel confident to continue working with some JavaScript Frameworks and make basic Backend parts for applications',
    },
    {
      id: 9,
      name: 'All about UX Design',
      author: 'Mr. JS Expert',
      readTime: 30,
      type: 'Medium',
      price: 80.0,
      ratings: 4.5,
      image: 'assets/books/book-9.jpg',
      description:
        'In this book you will read and learn the fundamentals of Design. After reading this book you can feel confident to continue working with UX Tools and design complex applications.',
    },
  ];

  // newBookList = this.books

  //Getters -------------------
  getTotal() {
    return this.books;
  }
  getTotalBooks() {
    return this.books.length;
  }
  getTotalFreeBeginnerBooks() {
    return this.books.filter((book) => book.type === 'Beginner').length;
  }
  getTotalMediumBooks() {
    const mediumBooks = this.books.filter((book) => book.type === 'Medium');
    return mediumBooks.length;
  }
  getTotalAdvancedBooks() {
    const advancedBooks = this.books.filter((book) => book.type === 'Advanced');
    return advancedBooks.length;
  }

  // Properties ---------------------
  bookCountRadioButton: string = 'All';
  searchText: string = '';

  // Methods -----------------------
  onFilterRadioButtonChanged(data: string) {
    this.bookCountRadioButton = data;
    // console.log(this.bookCountRadioButton)
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    // console.log(this.searchText)
  }

  // onSearchTextEntered(searchValue: string) {
  //   this.newBookList = this.books.filter((book) => {
  //     return book.name.includes(searchValue)
  //   })
  //   console.log(this.newBookList)
  // }
}
