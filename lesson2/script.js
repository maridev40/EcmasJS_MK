"use strict";

// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {

    title = '';
    author = ''; 
    pages = 0;

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`Книга (название: ${this.title}; автор: ${this.author}; количество страниц: ${this.pages})`)
    };
};

const book = new Book('Программирование на JS', 'Петров А.Р.', 300);
book.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

class Student {
    name = '';
    age = 0;
    grade = '';

    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log(`Студент (имя: ${this.name}; возраст: ${this.age}; класс: ${this.grade})`)
    }; 
};

const student = new Student('Петр', 20, 'пятый');
student.displayInfo();