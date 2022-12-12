class Basket {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  showProducts() {
    console.log(this.products);
  }
}

class Product {
  constructor(id, name, cost) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }
}

const basket1 = new Basket();
// basket1.showProducts();

//создать три продукта:банан, апельсин, яблоко
const banana = new Product(1, 'Banana', 300);
const apple = new Product(2, 'Apple', 200);
const orange = new Product(3, 'Orange', 250);

basket1.addProduct(banana);

//Создать два класса: машина и двигатель
//
class Auto {
  constructor(mark, model, year) {
    this.mark = mark;
    this.model = model;
    this.year = year;
  }
}

class Engine extends Auto {
  constructor(mark, model, year, volume, speed) {
    super(mark, model, year);
    this.volume = volume;
    this.speed = speed;
  }
}

const v2 = new Engine('Peugeout', 407, 2010, '2.0', '200');
const v4 = new Engine('Peugeout', 407, 2010, '2.0', '200');

//Создать два класса: Университет и Факультет
//Универ: название, год образования, факультеты
//Факультет: название, количество учащихся
//Создать метод у Универа для добавления факультетов

class University {
  constructor(name, year) {
    this.name = name;
    this.year = year;
    this.faculties = [];
  }

  addFaculty(faculty) {
    this.faculties.push(faculty);
  }
}

class Faculty {
  constructor(name, subjects) {
    this.name = name;
    this.subjects = subjects;
    this.students = [];
  }

  addStudent(student) {
    student.marks.forEach((element) => {
      const average = element.marks.reduce((a, b) => a + b, 0) / student.marks.length;
      if ((element.subject === 'English' && average >= 6) || (element.subject === 'Programming' && average >= 6)) {
        this.students.push(student);
      }
    });
  }
}

const BSUIR = new University('BSUIR', 1956);
const BSU = new University('BSU', 1994);
const BSEU = new University('BSEU', 1935);

const IIT = new Faculty('IIT', ['English', 'Mathematics', 'Algoritms', 'Programming']);

BSUIR.addFaculty(IIT);

class Student {
  constructor(fullname, age, marks) {
    this.fullname = fullname;
    this.age = age;
    this.marks = marks;
  }
}

const John = new Student('John Snow', 33, [
  {
    subject: 'English',
    marks: [9, 3, 7, 10, 3, 8],
  },
  {
    subject: 'Mathematics',
    marks: [1, 8, 1, 10, 3, 9],
  },
  {
    subject: 'Algoritms',
    marks: [9, 3, 7, 3, 3, 8],
  },
  {
    subject: 'Programming',
    marks: [3, 3, 3, 7, 3, 8],
  },
]);
const Sansa = new Student('Sansa Start', 20, [
  {
    subject: 'English',
    marks: [9, 3, 1, 3, 3, 8],
  },
  {
    subject: 'Mathematics',
    marks: [3, 3, 7, 6, 3, 8],
  },
  {
    subject: 'Algoritms',
    marks: [1, 3, 7, 1, 3, 8],
  },
  {
    subject: 'Programming',
    marks: [3, 3, 7, 8, 3, 8],
  },
]);
const Richard = new Student('Richard Barateon', 37, [
  {
    subject: 'English',
    marks: [1, 3, 7, 10, 3, 8],
  },
  {
    subject: 'Mathematics',
    marks: [9, 3, 7, 10, 3, 8],
  },
  {
    subject: 'Algoritms',
    marks: [9, 3, 3, 4, 3, 8],
  },
  {
    subject: 'Programming',
    marks: [9, 3, 7, 9, 3, 8],
  },
]);
const Robert = new Student('Robert Barateon', 20, [
  {
    subject: 'English',
    marks: [3, 3, 7, 4, 3, 8],
  },
  {
    subject: 'Mathematics',
    marks: [6, 3, 7, 7, 3, 8],
  },
  {
    subject: 'Algoritms',
    marks: [9, 3, 7, 3, 3, 8],
  },
  {
    subject: 'Programming',
    marks: [4, 3, 7, 3, 3, 8],
  },
]);
const Arja = new Student('Arja Stark', 18, [
  {
    subject: 'English',
    marks: [5, 3, 7, 1, 3, 8],
  },
  {
    subject: 'Mathematics',
    marks: [3, 3, 7, 1, 3, 8],
  },
  {
    subject: 'Algoritms',
    marks: [1, 3, 7, 4, 3, 8],
  },
  {
    subject: 'Programming',
    marks: [2, 3, 7, 2, 3, 8],
  },
]);

IIT.addStudent(John);
IIT.addStudent(Sansa);
IIT.addStudent(Richard);
IIT.addStudent(Robert);
IIT.addStudent(Arja);

console.log(IIT);
