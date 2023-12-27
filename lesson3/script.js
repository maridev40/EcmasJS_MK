"use strict";

// 1. Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee {
    name;
    constructor(name) {
        this.name = name;
    }
    displayinfo() {
        console.log(`Сотрудник (имя: ${this.name})`);
    }
}

class Manager extends Employee {
    department;
    constructor (name, department) {
        super(name);
        this.department = department;
    }
    displayinfo() {
        console.log(`Менеджер (имя: ${this.name}; отдел: ${this.department})`);
    }
}

const emp = new Employee('Петр');
emp.displayinfo();

const manag = new Manager('Наталья', 'Информационный');
manag.displayinfo();


// 2. Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Product {
    name;
    price = 0;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    products = [];
    orderNumber = 0;
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
    }
    addProduct(value) {
        this.products.push(value);
    }
    getTotalPrice() {
        return this.products.reduce((acc, element) => acc + element.price, 0);
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice());