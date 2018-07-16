<!-- # code-style ![js](img/js.svg) -->
<img src="img/js.svg" alt="js" width="150px"/>
<!-- <link rel="stylesheet" type="text/css" media="all" href="css/style.css" /> -->

TODO: **добавить ссылки на линтер**

Авторы: [Георгий Грошев](https://github.com/eclegend), [Илья Назаров](https://github.com/ilich-x)

# Содержание

- [Предисловие](#Предисловие)
  - [Цель](#Цель)
  - [Профит](#Профит)
- [Правила](#Правила)
---
  - [Пробелы, отступы и переносы](#Пробелы-отступы-и-переносы)
  - [Стиль регистра: CamelCase](#Стиль-регистра-camelcase)
  - [Название функции должно отражать ее назначение](#Название-функции-должно-отражать-ее-назначение)
---

  - [Объявление переменных](#Объявление-переменных)
  - [Объекты](#Объекты)
  - [Массивы](#Массивы)
  - [Строки](#Строки)
  - [Функции](#Функции)
  - [Инкременты и декременты](#Инкременты-и-декременты)
  - [Операторы сравнения и равенства](#Операторы-сравнения-и-равенства)
  - [Тернарные операторы](#Тернарные-операторы)

- [Map,ForEach,Filter,every/some](#Map,ForEach,Filter,every/some)
- [Список литературы](#Список-литературы)
- [Changelog](#changelog)

# Предисловие

Это руководство находится в разработке, все его постулаты не являются абсолютно истинными. Критика приветствуется. В процессе будет дополняться.

## Цель

Добиться кристализации **Единого стиля**. Что бы любой код в любом файле не был отличим по стилю от любого другого кода в любом другом файле. Как если бы он был написан одним человеком.

## Профит

Это болезненно, но профит от этого есть:

- применение лучших практик, которые будут понятны всем;
- более понятный код;
- Однородность кода;
- уменьшение количества ошибок;
- уменьшение времени на разработку;
- уменьшение времени на понимание чужого кода;
- уменьшение времени на правки/поддержку;

# Правила

## Пробелы, отступы и переносы

`Отсутпы: 2 пробела.`

Пробелы не ствятся:

- между названием функции и скобкой;

Однородность кода — это хорошо. Вам не надо будет добавлять или удалять пробел при манипуляции с именем.

```javascript
// плохо
const foo = function(){};
const grove = function (){};
const hide = function() {};

// хорошо
const getX = function () {};
const getY = function a() {};
```

- между круглыми скобками и их содержимым;

```javascript
// плохо
function foo( a ) {
  console.log( 'Hello', a );
}
// хорошо
function foo(a) {
  console.log('Hello', a);
}
```

- между квадратными скобками и их содержимым

```javascript
// плохо
const foo = [ 1, 2, 3 ];
console.log(foo[ 0 ]);

// хорошо
const foo = [1, 2, 3];
console.log(foo[0]);
```

- между ключом и двоеточием;

```javascript
// плохо
this.var = {
  number : 10,
};
// хорошо
this.var = {
  number: 10,
};
```

---

Пробелы ставятся:

- между логическими, математическими операторами и их операндами,перед и после равенства (оператор присвоения);

```javascript
// плохо
const x=y+5;

// хорошо
const x = y + 5;
```

- между фигурными скобками и их содержимым, а также после открывающей и перед закрывающей скобкой, если объект записан в одну строчку

```javascript
// плохо
const foo = {clark: 'kent'};

// хорошо
const foo = { clark: 'kent' };
```

- после запятой;

```javascript
// плохо
const foo = { clark: 'kent',devid: 'selbi' };
// хорошо
const foo = { clark: 'kent', devid: 'selbi' };
```

- после двоеточия;

```javascript
// плохо
this.var = {
  number:10,
};
// хорошо
this.var = {
  number: 10,
};
```

- перед и после стрелки в стрелочной функции;

```javascript
// хорошо
this.arr = [1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// хорошо
this.arr = [1, 2, 3].map((x) => x + 1);
```

Если есть цепочка вызовов, где каждый метод вызывается с новой строки, то эти методы должны быть на одном уровне, на следующем от объекта.

Используйте переносы строк и отступы, когда делаете длинные цепочки методов (больше 2-х методов). Ставьте точку в начале строки, чтобы дать понять, что это не новая инструкция, а продолжение цепочки

```javascript
// плохо
this.dom.scene.find('.selected').highlight().end().find('.open').updateCount();

// хорошо
this.dom.scene
··.find('.selected')
····.highlight()
····.end()
··.find('.open')
····.updateCount();

// Отсутпы: 2 пробела.
this.var = {
··nums: [1,2,3,4,5],
··strings: ["1","2","3","4","5"],
··itemObj: {
····key1: "1",
····key1: "2",
····key3: {
······//...
····}
··}
};
```
---
TODO:
```javascript
// плохо
const arr = [
  [0, 1], [2, 3], [4, 5],
];

const objectInArray = [{
  id: 1,
}, {
  id: 2,
}];

const numberInArray = [
  1, 2,
];

// хорошо
const arr = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [
  1,
  2,
];
```

---

Переносы не ставятся:

- перед скобкой (если только перед ней не идет другая скобка того же вида);

```javascript
this.arr = [1, 2, 3].map((x) => x * x);
```

---

Переносы ставятся:

- после скобок (скобка остается), если далее идет большой кусок кода;
- после стрелки в стрелочной функции (как блок инструкций);

```javascript
const itemHeight = (item) => {
  const { height, largeSize, smallSize } = item;
  return height > 256 ? largeSize : smallSize;
};
```

[<img src="img/right.svg" alt="js" height="10px" width="10px"/> К оглавлению](#Содержание)

## Стиль регистра: CamelCase.


> Cейчас у нас много где встречается регистр [Snake_case](https://ru.wikipedia.org/wiki/Snake_case), это пришло к нам от Ruby-стов вместе с CoffeeScript-ом.

В мире JS везде стандартом является [CamelCase](https://ru.wikipedia.org/wiki/CamelCase) регистр. Это можно увидеть, например, в спецификациях [ECMAScript](https://www.ecma-international.org/ecma-262/)-а и [DOM](https://www.w3.org/TR/dom/)-а.

Стандартные методы `this.tutor.play_button(), $$.scene__draw()` и методы компонентов остаются как есть.
> eslint: [`camelcase`](https://eslint.org/docs/rules/camelcase.html)
Пример:

```javascript
// Плохо
$$.Script.prototype.init_dragger = function() {...};

// Хорошо
$$.Script.prototype.initDragger = function() {...};
```

# Объявление переменных

Используйте const для объявления переменных; избегайте var.
Почему? Это гарантирует, что вы не сможете переопределять значения, т.к. это может привести к ошибкам и к усложнению понимания кода.
> eslint: [`prefer-const`](https://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign.html)

```javascript
// плохо
var a = 1;
var b = 2;

// хорошо
const a = 1;
const b = 2;
```

Если вам необходимо переопределять значения, то используйте `let` вместо `var`.
Почему? Область видимости `let` — блок, у `var` — функция.
> eslint: [`no-var`](https://eslint.org/docs/rules/no-var.html)
```javascript
// плохо
var count = 1;
if (true) {
  count += 1;
}

// хорошо, используйте let.
let count = 1;
if (true) {
  count += 1;
}
```

Помните, что у `let` и `const` блочная область видимости.

```javascript
// const и let существуют только в том блоке, в котором они определены.
{
  let a = 1;
  const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
```
---
[<img src="img/right.svg" alt="js" height="10px" width="10px"/> К оглавлению](#Содержание)

---

# Объекты 
Для создания объекта используйте литеральную нотацию. 
>eslint: [`no-new-object`](https://eslint.org/docs/rules/no-new-object.html)

    ```javascript
    // плохо
    const item = new Object();

    // хорошо
    const item = {};
    ```
Используйте сокращенную запись метода объекта. 
>eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

    ```javascript
    // плохо
    const atom = {
      value: 1,

      addValue: function (value) {
        return atom.value + value;
      },
    };

    // хорошо
    const atom = {
      value: 1,

      addValue(value) {
        return atom.value + value;
      },
    };
    ```

Используйте сокращенную запись свойств объекта. 
>eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

    > Почему? Это короче и понятнее.

    ```javascript
    const lukeSkywalker = 'Luke Skywalker';

    // плохо
    const obj = {
      lukeSkywalker: lukeSkywalker,
    };

    // хорошо
    const obj = {
      lukeSkywalker,
    };
    ```
Только недопустимые идентификаторы помещаются в кавычки. 
>eslint: [`quote-props`](https://eslint.org/docs/rules/quote-props.html)

    > Почему? На наш взгляд, такой код легче читать. Это улучшает подсветку синтаксиса, а также облегчает оптимизацию для многих JS движков.

    ```javascript
    // плохо
    const bad = {
      'foo': 3,
      'bar': 4,
      'data-blah': 5,
    };

    // хорошо
    const good = {
      foo: 3,
      bar: 4,
      'data-blah': 5,
    };
    ```
[<img src="img/right.svg" alt="js" height="10px" width="10px"/> К оглавлению](#Содержание)
# Массивы
Для создания массива используйте литеральную нотацию. 
>eslint: [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor.html)

    ```javascript
    // плохо
    const items = new Array();

    // хорошо
    const items = [];
    ```

Для копирования массивов используйте оператор расширения `...`.

    ```javascript
    // плохо
    const len = items.length;
    const itemsCopy = [];
    let i;

    for (i = 0; i < len; i += 1) {
      itemsCopy[i] = items[i];
    }

    // хорошо
    const itemsCopy = [...items];
    ```

Для преобразования массиво-подобного объекта в массив используйте оператор расширения `...` вместо [`Array.from`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

    ```javascript
    const foo = document.querySelectorAll('.foo');

    // хорошо
    const nodes = Array.from(foo);

    // отлично
    const nodes = [...foo];
    ```

Используйте операторы `return` внутри функций обратного вызова в методах массива. Можно опустить `return`, когда тело функции состоит из одной инструкции, возврщающей выражение без побочных эффектов.
>eslint: [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)

```javascript
// хорошо
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// хорошо
[1, 2, 3].map(x => x + 1);

// плохо - нет возвращаемого значения, следовательно, `acc` становится `undefined` после первой итерации
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  acc[index] = flatten;
});

// хорошо
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  acc[index] = flatten;
  return flatten;
});

// плохо
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  } else {
    return false;
  }
});

// хорошо
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  }

  return false;
});
```
[<img src="img/right.svg" alt="js" height="10px" width="10px"/> К оглавлению](#Содержание)
# Строки

Используйте одинарные кавычки `''` для строк.
>eslint: [`quotes`](https://eslint.org/docs/rules/quotes.html)

```javascript
// плохо
const name = 'Capt. Janeway';

// плохо - литерал шаблонной строки должен содержать интерполяцию или переводы строк
const name = `Capt. Janeway`;

// хорошо
const name = 'Capt. Janeway';
```

Строки, у которых в строчке содержится более 100 символов, не пишутся на нескольких строчках с использованием конкатенации.

Почему? Работать с разбитыми строками неудобно и это затрудняет поиск по коду.

```javascript
// плохо
const errorMessage =
  'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// плохо
const errorMessage =
  'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

// хорошо
const errorMessage =
  'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
```

При создании строки программным путем используйте шаблонные строки вместо конкатенации.

Почему? Шаблонные строки дают вам читабельность, лаконичный синтаксис с правильными символами перевода строк и функции интерполяции строки.
>eslint: [`prefer-template`](https://eslint.org/docs/rules/prefer-template.html) | [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)
```javascript
const errorMessage = `This is a super long error that was thrown because 
  of Batman. When you stop to think about how Batman had anything to do
  with this, you would get nowhere fast.`;
```

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
  return `How are you, ${name}?`;
}

// хорошо
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

Не используйте в строках необязательные экранирующие символы. 
>eslint: [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)

> Почему? Обратные слеши ухудшают читабельность, поэтому они должны быть только при необходимости.
```javascript
  // плохо
  const foo = '\'this\' \i\s \"quoted\"';
  // хорошо
  const foo = '\'this\' is "quoted"';
  const foo = `my name is '${name}'`;
```

[<img src="img/right.svg" alt="js" height="10px" width="10px"/> К оглавлению](#Содержание)

# Функции

Название функций должно быть глаголом. Если помимо глагола нужны ещё какие то пояснения, то глагол должен стоять вначале. Функциями так же являются и шаги в графе, и методы скрипта.

> Функция, которая возвращает булевое значение (`true` или `false`), назвается — `Предикат`. Её название начинается с глагола `is...` (например: `isArray()`).
Избегайте названий из одной буквы. Имя должно быть наглядным.
>eslint: [`id-length`](https://eslint.org/docs/rules/id-length)
Пример:

```javascript
// Не очень хорошо
$$.Script.prototype.dragger = function() {...};
$$.Script.prototype.right = function() {...};

// Хорошо
$$.Script.prototype.initDragger = function() {...};
$$.Script.prototype.renderDragger = function() {...};
$$.Script.prototype.isRight = function() {...};
```

Никогда не называйте параметр `arguments`. Он будет иметь приоритет над объектом `arguments`, который доступен для каждой функции.

```javascript
// плохо
function foo(name, options, arguments) {
  // ...
}

// хорошо
function foo(name, options, args) {
  // ...
}
```


Никогда не используйте `arguments`, вместо этого используйте синтаксис оставшихся параметров `...`. 
> Почему? `...` явно говорит о том, какие именно аргументы вы хотите извлечь. Кроме того, такой синтаксис создает настоящий массив, а не массиво-подобный объект как `arguments`.

>eslint: [`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)

```javascript
// плохо
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}
// хорошо
function concatenateAll(...args) {
  return args.join('');
}
```


Используйте синтаксис записи аргументов по умолчанию, а не изменяйте аргументы функции.

```javascript
// очень плохо
function handleThings(opts) {
  // Нет! Мы не должны изменять аргументы функции.
  // Плохо вдвойне: если переменная opts будет ложной,
  // то ей присвоится пустой объект, а не то что вы хотели.
  // Это приведет к коварным ошибкам.
  opts = opts || {};
  // ...
}
// все еще плохо
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}
// хорошо
function handleThings(opts = {}) {
  // ...
}
```

Избегайте побочных эффектов с параметрами по умолчанию.

> Почему? И так все понятно.

```javascript
var b = 1;
// плохо
function count(a = b++) {
  console.log(a);
}
count();  // 1
count();  // 2
count(3); // 3
count();  // 3
```

[<img src="img/right.svg" alt="js" height="10px" width="10px"/> К оглавлению](#Содержание)

# Инкременты и декременты

Избегайте использования унарных инкрементов и декрементов (`++`, `--`)

> Согласно документации eslint, унарные инкремент и декремент автоматически вставляют точку с запятой, что может стать причиной трудноуловимых ошибок при инкрементировании и декрементировании значений. Также нагляднее изменять ваши значения таким образом `num += 1` вместо `num++` или `num ++`. Запрет на унарные инкремент и декремент ограждает вас от непреднамеренных преждевременных инкрементаций/декрементаций значений, которые могут привести к непредсказуемому поведению вашей программы.

>eslint [`no-plusplus`](https://eslint.org/docs/rules/no-plusplus)

```javascript
// плохо
let num = 1;
num++;
--num:

// хорошо
let num = 1;
num += 1;
num -= 1;
```

# Операторы сравнения и равенства

Используйте `===` и `!==` вместо `==` и `!=`
>eslint: [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq.html)
> Условные операторы, такие как if, вычисляются путем приведения к логическому типу `Boolean` через абстрактный метод `ToBoolean` и всегда следуют следующим правилам:

- `Object` соответствует `true`
- `Undefined` соответствует `false`
- `Null` соответствует `false`
- `Boolean` соответствует значению булева типа
- `Number` соответствует `false`, если `+0`, `-0`, or `NaN`, в остальных случаях `true`
- `String` соответствует `false`, если строка пустая `''`, в остальных случаях `true`

```javascript
if ([0] && []) {
  // true
  // Массив (даже пустой) является объектом, а объекты возвращают true
}

// простой пример
const x = 2; // Number
const y = '2'; // String
const compareStrict = x === y; // false
const compareNonStrict = x == y; // true
```

> Используйте сокращения для булевских типов, а для строк и чисел применяйте явное сравнение

```javascript
// плохо
if (isValid === true) {
  // ...
}

// хорошо
if (isValid) {
  // ...
}

// плохо
if (name) {
  // ...
}

// хорошо
if (name !== '') {
  // ...
}

// плохо
if (collection.length) {
  // ...
}

// хорошо
if (collection.length > 0) {
  // ...
}
```

> `0` и `1` также приводятся к `boolean` <br> > `0` это `false`, `1` это `true`

# Тернарные операторы

> Тернарные операторы не должны быть вложены и в большинстве случаев должны быть расположены на одной строке

```javascript
// плохо
const foo = maybe1 > maybe2 ? 'bar' : value1 > value2 ? 'baz' : null;

// разбит на два отдельных тернарных выражения
const maybeNull = value1 > value2 ? 'baz' : null;

const foo = maybe1 > maybe2 ? 'bar' : maybeNull;

// отлично
const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
```

> Избегайте ненужных тернарных операторов

```javascript
// плохо
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// хорошо
const foo = a || b;
const bar = !!c;
const baz = !c;
```

> При смешивании операторов, помещайте их в круглые скобки. Единственное исключение — это стандартные арифметические операторы (`+, -, *` и `/`), так как их приоритет широко известен.

```javascript
// плохо
const foo = (a && b < 0) || c > 0 || d + 1 === 0;

// плохо
const bar = a ** b - (5 % d);

// плохо
// можно ошибиться, думая что это (a || b) && c
if (a || (b && c)) {
  return d;
}

// хорошо
const foo = (a && b < 0) || c > 0 || d + 1 === 0;

// хорошо
const bar = a ** b - (5 % d);

// хорошо
if (a || (b && c)) {
  return d;
}
// хорошо
const bar = a + (b / c) * d;
```

[<img src="img/right.svg" alt="js" height="10px" width="10px"/> К оглавлению](#Содержание)


# `map,forEach,filter,every/some`

Стараемся избавляться от циклов. При больших объемах читаемость заметно ухудшается.

---

### `forEach` VS `for`

[Пример](https://thejsguy.com/2016/07/30/javascript-for-loop-vs-array-foreach.html)

```javascript
let products = [
  { name: 'Running shoes', price: 75 },
  { name: 'Golf shoes', price: 85 },
  { name: 'Dress shoes', price: 95 },
  { name: 'Walking shoes', price: 65 },
  { name: 'Sandals', price: 55 },
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

---

#### `forEach`

Метод «`arr.forEach(callback[, thisArg])`» используется для перебора массива.

Он для каждого элемента массива вызывает функцию callback.

Этой функции он передаёт три параметра `callback(item, i, arr)`:

- `item` – очередной элемент массива.
- `i` – его номер.
- `arr` – массив, который перебирается.

---

#### `map`

Метод «`arr.map(callback[, thisArg])`» используется для трансформации массива.

Практически идентичен методу `forEach`, за исключением того, что `map` возвращает новый `массив`.
Также для каждого элемента массива вызывает функцию callback и передаёт три параметра `callback(item, i, arr)`:

Например:

```javascript
// при такой записи можно не писать "return"
this.dom = {
  coloredBlocks: _.range(5).map(i => $.div(`colored-block block-${i}`)
}
// return
this.dom.plates = _.range(5).map(i => {
  let plate = $.div(`plate plate-${i}`).html('text');
  plate.appendTo(this.dom.scene).css({
    position:'absolute',
  })
  return plate;
})
```

---

#### `every/some`

Эти методы используются для проверки массива.

- Метод «`arr.every(callback[, thisArg])`» возвращает `true`, если вызов `callback` вернёт `true` для каждого элемента `arr`.
- Метод «`arr.some(callback[, thisArg])`» возвращает `true`, если вызов `callback` вернёт `true` для какого-нибудь элемента `arr`.

```javascript
const arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

alert(arr.every(isPositive)); // false, не все положительные
alert(arr.some(isPositive)); // true, есть хоть одно положительное
```

---

#### Итого:

- `forEach` – для перебора массива.
- `filter` – для фильтрации массива.
- `every/some` – для проверки массива.
- `map` – для трансформации массива в массив.

---

**UPD: Во многих ситуациях их использование позволяет написать код короче и понятнее, чем обычный перебор через for.**

[<img src="img/right.svg" alt="js" height="10px" width="10px"/> К оглавлению](#Содержание)

# Список литературы

- [CoffeeScript Style Guide (Middle_math)](https://github.com/uchiru/content/blob/master/doc/custom/middle_math_mos/style-guide-coffeescript.md)
- [Руководство по написанию JavaScript кода от Airbnb](https://github.com/airbnb/javascript/)
