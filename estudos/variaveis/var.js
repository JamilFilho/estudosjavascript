/*
    Scopo javascript

    Block statement - declaração de bloco

    { //abertura do bloco
        conteúdo dentro do escopo é local
    } // fechamento do bloco

    o var é global e pode funcionar fora do escopo de bloco
 */
console.log(x) // variável sendo chamada fora do escopo local - neste caso o retorno é undefined

/*
    Ao rodar o código o JavaScript define a variável e depois seta o valor
    // hoisting

    console.log(x)
    
    var x

    {
        x = 0
    }

*/

{
    var x = 0 // variável declarada dentro do escopo
}

console.log(x) // variável sendo chamada fora do escopo local - neste caso o retorno é 0