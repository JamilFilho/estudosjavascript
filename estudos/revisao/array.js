// Array

const animals = [ // array
    'Lion', // index 0
    'Cat', // index 1
    'Dog', // index 2
    'Ant', // index 3
    {
        name:'Monkey',
        age:2
    }
]

// retorna o array
console.log(animals)

// acessando os valores dentro do array utilizando a posição do array.
// a lista sempre inicia a partir do zero
console.log(animals[1])

// acessando uma propriedade de um objeto dentro do array
console.log(animals[4].name)