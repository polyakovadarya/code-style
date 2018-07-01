# code-style


Авторы: [1,2](#ref).

## Содержание

- [Предисловие](#Предисловие)
    - [Цель](#Цель)
    - [Профит](#Профит)
- [Правила](#Правила)
  - [1. JavaScript](#1-Синтаксис)
    - [1.1. Пробелы, отступы и переносы](#11-Пробелы-отступы-и-переносы)
    - [1.2. Стиль регистра: CamelCase](#11-Стиль-регистра-camelcase)
    - [1.3. ES6-стиль](#12-ES6-стиль)
      - [1.3.1 Объявление переменных](#121-Объявление-переменных)
      - [1.3.2 Строки](#122-Строки)
      - [1.3.3 Циклы](#123-Map,ForEach,Filter,every/some)

- [Changelog](#changelog)

## Предисловие

Это руководство находится в разработке, все его постулаты не являются абсолютно истинными. Критика приветствуется. В процессе будет дополняться.

### Цель

Добиться кристализации **Единого стиля**. Что бы любой код в любом файле не был отличим по стилю от любого другого кода в любом другом файле. Как если бы он был написан одним человеком.

### Профит

Это болезненно, но профит от этого есть:
- применение лучших практик, которые будут понятны всем;
- более понятный код;
- уменьшение количества ошибок;
- уменьшение времени на разработку;
- уменьшение времени на понимание чужого кода;
- уменьшение времени на правки/поддержку;
- более лёгкий переход с CoffeeScript на ES6.

## Правила

### 1. JavaScript
#### 1.1. Пробелы, отступы и переносы

Пробелы не ствятся:

- между названием функции и скобкой;
- между двумя скобками (одного или разных видов);
- между ключом и двоеточием;

Пробелы ставятся:

- между логическими, математическими операторами и их операндами;
- после запятой;
- перед и после равенства (оператор присвоения);
- после двоеточия;
- перед и после стрелки в стрелочной функции;
- после открывающей и перед закрывающей скобкой, если объект записан в одну строчку;

Отсутпы: **2 пробела**.

Если есть цепочка вызовов, где каждый метод вызывается с новой строки, то эти методы должны быть на одном уровне, на следующем от объекта.

Переносы не ставятся:

- перед скобкой (если только перед ней не идет другая скобка того же вида);

Переносы ставятся:

- после скобок (скобка остается), если далее идет большой кусок кода;
- после стрелки в стрелочной функции (как блок инструкций);
### 1.2. Стиль регистра: CamelCase

Cейчас у нас много где встречается регистр [Snake_case](https://ru.wikipedia.org/wiki/Snake_case), это пришло к нам от Ruby-стов вместе с CoffeeScript-ом.

В мире JS везде стандартом является [CamelCase](https://ru.wikipedia.org/wiki/CamelCase) регистр. Это можно увидеть, например, в спецификациях [ECMAScript](https://www.ecma-international.org/ecma-262/)-а и [DOM](https://www.w3.org/TR/dom/)-а.

Стандартные методы `this.tutor.play_button(), $$.scene__draw()` и методы компонентов остаются как есть.

Пример:

```javascript
// Хорошо
$$.Script.prototype.initDragger = () => {...};

// Не очень хорошо
$$.Script.prototype.init_dragger = () => {...};

```

### 1.3 ES6 стиль

#### 1.3.1 Объявление переменных

  Используйте const для объявления переменных; избегайте var.
  Почему? Это гарантирует, что вы не сможете переопределять значения, т.к. это может привести к ошибкам и к усложнению понимания кода.
[Источник](https://github.com/leonidlebedev/javascript-airbnb#arrow-functions)
```javascript

// хорошо
const a = 1;
const b = 2;

// плохо
var a = 1;
var b = 2;

```
 Если вам необходимо переопределять значения, то используйте let вместо var.
 Почему? Область видимости let — блок, у var — функция.
```javascript

// хорошо, используйте let.
let count = 1;
if (true) {
  count += 1;
}

// плохо
var count = 1;
if (true) {
  count += 1;
}

```
 Помните, что у let и const блочная область видимости.
```javascript
// const и let существуют только в том блоке, в котором они определены.
{
  let a = 1;
  const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
```

#### 1.3.2 Строки

Используйте одинарные кавычки '' для строк.

```javascript
// плохо
const name = "Capt. Janeway";

// плохо - литерал шаблонной строки должен содержать интерполяцию или переводы строк
const name = `Capt. Janeway`;

// хорошо
const name = 'Capt. Janeway';
```

Строки, у которых в строчке содержится более 100 символов, не пишутся на нескольких строчках с использованием конкатенации.

Почему? Работать с разбитыми строками неудобно и это затрудняет поиск по коду.
```javascript
// плохо
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// плохо
const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

// хорошо
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
```
При создании строки программным путем используйте шаблонные строки вместо конкатенации.

Почему? Шаблонные строки дают вам читабельность, лаконичный синтаксис с правильными символами перевода строк и функции интерполяции строки.
```javascript
// плохо
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// плохо
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// плохо
function sayHi(name) {
  return `How are you, ${ name }?`;
}

// хорошо
function sayHi(name) {
  return `How are you, ${name}?`;
}
```


#### 1.3.3 Map,ForEach,Filter,every/some
Избавляемся от циклов. При больших объемах читаемость заметно ухудшается.

[Пример](https://thejsguy.com/2016/07/30/javascript-for-loop-vs-array-foreach.html)
```javascript
let products = [
  { name: 'Running shoes', price: 75 },
  { name: 'Golf shoes',    price: 85 },
  { name: 'Dress shoes',   price: 95 },
  { name: 'Walking shoes', price: 65 },
  { name: 'Sandals',       price: 55 }
];

// не очень хорошо
for (let i = 0; i < products.length; i++) {
  let product = products[i];
  console.log(product);
  for (let j = 0; j < product.sizes.length; j++) {
    let size = product.sizes[j];
    console.log(size);
  }
}
// хорошо
products.forEach((product) => {
  product.sizes.forEach((size) => {
    console.log(size);
  });
});
```
Так же из стандартных методов `Array` можно составлять удобные цепочки.

**UPD: Если где-то неудобно использовать функции высшего порядка, то можно использовать циклы. Но старайтесь избегать этого.**

Map

Метод «arr.map(callback[, thisArg])» используется для трансформации массива.

Он создаёт новый массив, который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента arr.

Например:
```javascript
// при такой записи можно не писать "return"
this.dom = {
  coloredBlocks: _.range(5).map(i=> $.div(`colored-block block-${i}`)
}
// return
this.dom.plates = _.range(5).map(i=>{
  let plate = $.div(`plate plate-${i}`).html('text');
  plate.appendTo(this.dom.scene).css({
    position:'absolute',
  })
  return plate;
})
```