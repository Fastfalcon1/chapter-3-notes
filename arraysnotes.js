let students = ['Adam' , 'brad' , 'casey' , 'david'];
let  values = [1, 2, 3, 4];

console.log(students);
console.log(students[0])
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);

console.log('student:'+ students[0]);
console.log('student 2: ${students[1}}')

students[1] = 'stephanie';
console.log(students);
students.push('fred', 'georgina');
console.log(students);

students.pop();
console.log(students);

students.shift();
console.log(students);

student.unshift('zeke');
console.log(students);
student.unshift('yvonne' , 'Xavier');
console.log(students);

numStudents = students.length;
console.log(numStudents);

let lastStudent = students[students.length - 1];
cosole.log(lastStudent);

let fruits = ['apple', 'banana', 'orange', 'lemon', 'grape',] ;
let citrus = fruits.slice(2,4);

console.log(citrus);