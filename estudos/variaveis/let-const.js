/* 
    O escopo determina a visibilidade de uma variável no JavaScript
    
    Const e let são variáveis locais e só funcionam dentro do escopo onde foram criadas.

    A variável const não atualiza
*/

let y = 1 // variável acessível apenas no escopo global

{
    let y = 0 // variável acessível apenas dentro do escopo local
    // se o 'let' for retirado o JavaScript irá trazer o y do escopo global para o escopo local e depois imprimir no console.log global
    
    console.log('Escopo local', y)
}

console.log('Escopo global', y)