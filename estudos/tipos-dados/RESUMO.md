# Tipos de dados

Segundo o ECMAScript standard temos 9 tipos de dados:

* Data types
  * Primitive / Primitive value
  * Structural
  * Structural Primitive

## Primitivos

Um dado primitivo não é um objeto e seu valor não sofre alterações. Ou seja, uma `string "ABC"` não terá seu valor modificado e é diferente de `"abc"`.

- [String](string.js)
- [Number](number.js)
- [Boolean](boolean.js)
- [Undefined](undefined.js)
- [Symbol](/symbol.js)
- [BigInt](/bigint.js)

## Estruturais

- [Object](object.js)
  - [Array](array.js)
  - Map
  - Set
  - Date
  - ...
- [Function](function.js)

## Primitive Estrutural / Structural Root Primitive

- [null](undefined.js) - é um objeto vazio que não se altera, por isso ele é primitivo, se ele se alterar deixa de ser nulo.