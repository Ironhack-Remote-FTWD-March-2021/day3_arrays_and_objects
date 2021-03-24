// const searchField = 'name'
// const name = 'Jaime'

// name: name  --> name

// const myObjectLiteral = {
//   name: 'Jaime',
//   lastName: 'Jacobo',
// }

//Para añadir una propiedad nueva a mi objeto literal
// myObjectLiteral.age = 26
// myObjectLiteral['age'] = 26

//Borrar una propiedad de mi objeto literal
// delete myObjectLiteral.name
// delete myObjectLiteral['name']

//Editar un value a partir del key
// myObjectLiteral.name = 'Pedro'
// myObjectLiteral['name'] = 'Pedro'

//Para saber si una propiedad existe dentro de mi objeto literal

// console.log('books' in myObjectLiteral)

// console.log(myObjectLiteral)

// const myObjectLiteral = {
//   name: 'Alex',
//   lastName: 'Jacobo',
// }

// Object.keys(<objeto>) --> Te devuelve un array con todos los keys de un objeto literal

// console.log(Object.keys(myObjectLiteral))

// Object.values(<objeto>) --> Te devuelve un array con todos los values de un objeto literal

// const valuesArray = Object.values(myObjectLiteral)

// if(valuesArray.includes('Jaime')){
//   console.log('Jaime está entre mis values')
// }

//for...in --> asignan a la variable que cras en este loop a cada key del obejto literal

//Para iterar por todos los keys de un objeto literal
// for(let key in myObjectLiteral){
//   console.log(key)
// }

//Para iterar por todos los values de un objeto literal
// for(let key in myObjectLiteral){
//   console.log(myObjectLiteral[key])
// }

// const otherObject = {}

// for(let key in otherObject.keys){
//   console.log(key.length)
// }

//Como podemos hacer para ver si un objeto literal está vacío o no
// if(Object.keys(otherObject).length === 0){
//   console.log(0)
// } else {
//   console.log(1)
// }

// const gtaV = {
//   name: 'Grand Theft Auto V',
//   releaseYear: 2013,
//   developer: 'Rockstar North',
//   designers: [
//     {name: 'Leslie', lastName: 'Benzies'},
//     {name: 'Imran', lastName: 'Sarwar'},
//   ],
//   platforms: ['PlayStation 3', 'Xbox 360', 'PlayStation 4', 'Xbox One'],
//   pegi: 18
// }

// console.log(gtaV.designers[1].lastName)
// // console.log(gtaV['designers'][1]['lastName'])

const classes = [
  [
    { firstName: "Tomas", lastName: "Bechtelar", age: 22 },
    { firstName: "Nico", lastName: "Schamberger", age: 26 },
    { firstName: "Ashleigh", lastName: "Kutch", age: 29 },
    { firstName: "Lulu", lastName: "Considine", age: 20 },
    { firstName: "Garland", lastName: "Waelchi", age: 21 },
  ],
  [
    { firstName: "Charlie", lastName: "Rolfson", age: 23 },
    { firstName: "Austin", lastName: "Schowalter", age: 26 },
    { firstName: "Emie", lastName: "Franecki", age: 29 },
    { firstName: "Okey", lastName: "Runte", age: 18 },
    { firstName: "Jameson", lastName: "Jakubowski", age: 22 },
  ],
  [
    { firstName: "Antwan", lastName: "Marquardt", age: 22 },
    { firstName: "Eugenia", lastName: "Nienow", age: 18 },
    { firstName: "Keely", lastName: "Hagenes", age: 29 },
    { firstName: "Jazmin", lastName: "Aufderhar", age: 29 },
    { firstName: "Stanley", lastName: "Hand", age: 22 },
  ],
  [
    { firstName: "Vincent", lastName: "Langworth", age: 20 },
    { firstName: "Mervin", lastName: "Blick", age: 28 },
    { firstName: "Damien", lastName: "Rohan", age: 28 },
    { firstName: "Fabian", lastName: "Kautzer", age: 22 },
    { firstName: "Lilliana", lastName: "Lesch", age: 26 },
  ],
  [
    { firstName: "Antonette", lastName: "Stokes", age: 25 },
    { firstName: "Alexandrine", lastName: "DuBuque", age: 22 },
    { firstName: "Braeden", lastName: "Walker", age: 26 },
    { firstName: "Derick", lastName: "Weber", age: 22 },
    { firstName: "Jaime", lastName: "Beatty", age: 30 },
  ],
];

// console.log(classes[2][1].age)

// if(classes[2][1].age < 18){
//   console.log('Es menor de edad')
// } else {
//   console.log('Es mayor de edad')
// }

//Iteration 1: Como podemos saber si hay algun alumno (y cuantos hay) de la primera clase que sean menores de 20 años?

// const firstClass = classes[0]

// let studentsLessThan20 = 0;

// for(let i = 0; i < firstClass.length; i++){
//   if(firstClass[i].age <= 19){
//     studentsLessThan20++
//   }
// }

// if(studentsLessThan20 === 0){
//   console.log('No hay ninguno menor de 20')
// } else {
//   console.log(`Minimo hay un alumno menor de 20. En total hay ${studentsLessThan20} alumno/s menores de 20 años`)
// }

//Iteration 2: Como puedo saber si tengo algún alumno en mi cuarta clase que tenga un apellido que empieze por M

// const fourthClass = classes[3]

// console.log(fourthClass)

// let counter = 0

// fourthClass.forEach(function(mate){
//   if(mate.lastName.startsWith('M')){
//     counter++
//   }
// })

// console.log(counter)

//Iteration 3: Quiero saber cuantos alumnos de mi última clase se llaman Robert

// const lastClass = classes[4]

// console.log(lastClass)

// let numberOfRoberts = 0

// for(let i = 0; i < lastClass.length; i++){
//   // console.log(lastClass[i])
//   if(lastClass[i].firstName === 'Robert'){
//     numberOfRoberts++
//   }
// }

// console.log(numberOfRoberts)

//Iteration 4: Quiero saber la media de edad de todos mis alumnos

//REFACTORIZACION

// let sumOfAges = 0
// let averageOfEachClass = 0
// let totalMean = 0

// for(let i = 0; i < classes.length; i++){
//   const actualClass = classes[i]

//   for(let k = 0; k < actualClass.length; k++){
//     sumOfAges += actualClass[k].age
//   }

//   averageOfEachClass += sumOfAges / actualClass.length
//   sumOfAges = 0

// }

// totalMean = averageOfEachClass / classes.length

// console.log(totalMean)

// Iteration 5: Crear un array que se llama allStudents y que contenga a todos los alumnos

// const allStudents = []

// for(let i = 0; i < classes.length; i++){
//   for(let k = 0; k < classes[i].length; k++){
//     allStudents.push(classes[i][k])
//   }
// }

// console.log(allStudents)

// Iteration 6: Numero de alumnos que hay en la clase 3

// console.log(classes[2].length)

//Iteration 7: Crear un array nuevo en donde tenga a todos mis alumnos de entre 20 y 23 años (inclusive)

const studentsBetween20and23 = [];

for (let i = 0; i < classes.length; i++) {
  for (let k = 0; k < classes[i].length; k++) {
    // console.log(classes[i][k])
    if (20 <= classes[i][k].age && classes[i][k].age <= 23) {
      studentsBetween20and23.push(classes[i][k]);
    }
  }
}

console.log(studentsBetween20and23);

const example = { name: "Jaime" };

console.log(example.name);
