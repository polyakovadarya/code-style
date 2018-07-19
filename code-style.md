
<img src="img/js.svg" alt="js" width="150px"/>

Авторы: [Георгий Грошев](https://github.com/eclegend), [Илья Назаров](https://github.com/ilich-x)

# Содержание

- [Предисловие](#Предисловие)
  * [Цель](#Цель)
  * [Профит](#Профит)
---
  - [Пробелы, отступы и переносы](#Пробелы-отступы-и-переносы)
  - [Блоки](#Блоки)
  - [Управляющие операторы](#Управляющие-операторы)
  - [Комментарии](#Комментарии)
  - [Запятые](#Запятые)
  - [Точка с запятой](#Точка-с-запятой)
  - [Стиль регистра: CamelCase](#Стиль-регистра-camelcase)
---
  - [Объявление переменных](#Объявление-переменных)
  - [Объекты](#Объекты)
  - [Массивы](#Массивы)
  - [Строки](#Строки)
  - [Функции](#Функции)
  - [Стрелочные функции](#Стрелочные-функции)
  - [Инкременты и декременты](#Инкременты-и-декременты)
  - [Операторы сравнения и равенства](#Операторы-сравнения-и-равенства)
  - [Приведение типов](#Приведение-типов)
  - [Тернарные операторы](#Тернарные-операторы)

- [Map, ForEach, Filter, every/some](#Map,ForEach,Filter,every/some)
---
- [Инструменты](#Инструменты)
- [Полезные ссылки](#Полезные-ссылки)
- [Список литературы](#Список-литературы)
- [Changelog](#changelog)

# Предисловие

Это руководство находится в разработке. Критика приветствуется. В процессе будет дополняться.

## Цель

Добиться кристализации **Единого стиля**. Чтобы любой код в любом файле не был отличим по стилю от любого другого кода в любом другом файле. Как если бы он был написан одним человеком.

## Профит

Это болезненно, но профит от этого есть:

- применение лучших практик, которые будут понятны всем;
- более понятный код;
- однородность кода;
- уменьшение количества ошибок;
- уменьшение времени на разработку;
- уменьшение времени на понимание чужого кода;
- уменьшение времени на правки/поддержку.

# Пробелы, отступы и переносы

Однородность кода — это хорошо. Вам не надо будет добавлять или удалять пробел при манипуляции с именем.

`Отсутпы: 2 пробела.`
Пробелы не ставятся:

- между названием функции и скобкой;

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

- между квадратными скобками и их содержимым;

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

- между фигурными скобками и их содержимым, а также после открывающей и перед закрывающей скобкой, если объект записан в одну строчку;

```javascript
// плохо
const foo = {clark: 'kent'};

// хорошо
const foo = { clark: 'kent' };
```
- перед открывающей фигурной скобкой у блока;

```javascript
// плохо
function test(){
  console.log('test');
}

// хорошо
function test() {
  console.log('test');
}

// плохо
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});

// хорошо
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});
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
this.arr = [1, 2, 3].map(x => x + 1);
```

Если есть цепочка вызовов, где каждый метод вызывается с новой строки, то эти методы должны быть на одном уровне, на следующем от объекта.

Используйте переносы строк и отступы, когда делаете длинные цепочки методов (больше 2-х методов). Ставьте точку в начале строки, чтобы дать понять, что это не новая инструкция, а продолжение цепочки.

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
this.arr = [1, 2, 3].map(x => x * x);
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
Оставляйте пустую строку между блоком кода и следующей инструкцией.

```javascript
if (foo) {
  return bar;
}
return baz;

// хорошо
if (foo) {
  return bar;
}

return baz;

// плохо
const obj = {
  foo() {
  },
  bar() {
  },
};
return obj;

// хорошо
this.arr = [1, 2, 3].map(x => {
  const y = x + 1;
  return x * y;
});

// хорошо
const obj = {
  foo() {
  },

  bar() {
  },
};

return obj;

// плохо
const arr = [
  function foo() {
  },
  function bar() {
  },
];
return arr;

// хорошо
const arr = [
  function foo() {
  },

  function bar() {
  },
];

return arr;
```

Не добавляйте отступы до или после кода внутри блока. 
> eslint: [`padded-blocks`](https://eslint.org/docs/rules/padded-blocks.html)

```javascript
// плохо
function bar() {

  console.log(foo);

}

// also bad
if (baz) {

  console.log(qux);
} else {
  console.log(foo);

}

// хорошо
function bar() {
  console.log(foo);
}

// хорошо
if (baz) {
  console.log(qux);
} else {
  console.log(foo);
}
```

### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)

# Блоки

Используйте фигурные скобки, когда блок кода занимает несколько строк. eslint: [`nonblock-statement-body-position`](https://eslint.org/docs/rules/nonblock-statement-body-position)

```javascript
// плохо
if (test)
  return false;
// хорошо
if (test) return false;
// хорошо
if (test) {
  return false;
}
// плохо
function foo() { return false; }
// хорошо
function bar() {
  return false;
}
```

Если блоки кода в условии `if` и `else` занимают несколько строк, расположите оператор `else` на той же строчке, где находится закрывающая фигурная скобка блока `if`. 
>eslint: [`brace-style`](https://eslint.org/docs/rules/brace-style.html)

```javascript
// плохо
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}
// хорошо
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}
```

Если в блоке `if` всегда выполняется оператор `return`, последующий блок `else` не нужен. `return`  внутри блока `else if`, следующем за блоком `if`, который содержит `return`, может быть разделен на несколько блоков `if`. 
>eslint: [`no-else-return`](https://eslint.org/docs/rules/no-else-return)

```javascript
// плохо
function foo() {
  if (x) {
    return x;
  } else {
    return y;
  }
}
// плохо
function cats() {
  if (x) {
    return x;
  } else if (y) {
    return y;
  }
}
// плохо
function dogs() {
  if (x) {
    return x;
  } else {
    if (y) {
      return y;
    }
  }
}
// хорошо
function foo() {
  if (x) {
    return x;
  }
  return y;
}

// хорошо
function cats() {
  if (x) {
    return x;
  }
  if (y) {
    return y;
  }
}
// хорошо
function dogs(x) {
  if (x) {
    if (z) {
      return y;
    }
  } else {
    return z;
  }
}
```
### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)
# Управляющие операторы

Если ваш управляющий оператор (`if`, `while` и т.д.) слишком длинный или превышает максимальную длину строки, то каждое (сгруппированное) условие можно поместить на новую строку. Логический оператор должен располагаться в начале строки.

Наличие операторов в начале строки приводит к выравниванию операторов и напоминает цепочку методов. Это также улучшает читаемость, упрощая визуальное отслеживание сложной логики.


```javascript
// плохо
if ((foo === 123 || bar === 'abc') &doesItLookGoodWhenItBecomesThatLong() &isThisReallyHappening()) {
  thing1();
}
// плохо
if (foo === 123 &&
  bar === 'abc') {
  thing1();
}
// плохо
if (foo === 123
  && bar === 'abc') {
  thing1();
}
// плохо
if (
  foo === 123 &&
  bar === 'abc'
) {
  thing1();
}
// хорошо
if (
  foo === 123
  && bar === 'abc'
) {
  thing1();
}
// хорошо
if (
  (foo === 123 || bar === 'abc')
  && doesItLookGoodWhenItBecomesThatLong()
  && isThisReallyHappening()
) {
  thing1();
}
// хорошо
if (foo === 123 && bar === 'abc') {
  thing1();
}
```
Не используйте операторы выбора вместо управляющих операторов.

```javascript
// плохо
!isRunning && startRunning();
// хорошо
if (!isRunning) {
  startRunning();
}
```
### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)

# Комментарии

Используйте двойной слэш `//` для однострочных комментариев. Располагайте такие комментарии отдельной строкой над кодом, который хотите пояснить. Если комментарий не является первой строкой блока, добавьте сверху пустую строку.

```javascript
// плохо
const active = true;  // это текущая вкладка
// хорошо
// это текущая вкладка
const active = true;
// плохо
function getType() {
  console.log('fetching type...');
  // установить по умолчанию тип 'no type'
  const type = this.type || 'no type';
  return type;
}
// хорошо
function getType() {
  console.log('fetching type...');
  // установить по умолчанию тип 'no type'
  const type = this.type || 'no type';
  return type;
}
// тоже хорошо
function getType() {
  // установить по умолчанию тип 'no type'
  const type = this.type || 'no type';
  return type;
}
```

Начинайте все комментарии с пробела, так их проще читать. 
>eslint: [`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)

```javascript
// плохо

//это текущая вкладка
const active = true;
// хорошо
// это текущая вкладка
const active = true;

// плохо

/**
 *make() возвращает новый элемент
 *соответствующий переданному названию тега
 */
function make(tag) {
  // ...
  return element;
}

// хорошо

/**
 * make() возвращает новый элемент
 * соответствующий переданному названию тега
 */
function make(tag) {
  // ...
  return element;
}
```

### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)

# Запятые

Не начинайте строку с запятой. 
>eslint: [comma-style](https://eslint.org/docs/rules/comma-style#comma-style-comma-style)

```javascript
// плохо
const story = [
    once
  , upon
  , aTime
];

// хорошо
const story = [
  once,
  upon,
  aTime,
];
```
Добавляйте висячие запятые. 
Такой подход дает понятную разницу при просмотре изменений. Кроме того, транспиляторы типа Babel удалят висячие запятые из собранного кода, поэтому вы можете не беспокоиться о проблемах в старых браузерах.
>eslint: [comma-dangle](https://eslint.org/docs/rules/comma-dangle#require-or-disallow-trailing-commas-comma-dangle)

```diff
// плохо - git diff без висячей запятой
const hero = {
     firstName: 'Florence',
-    lastName: 'Nightingale'
+    lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing']
};

// хорошо - git diff с висячей запятой
const hero = {
     firstName: 'Florence',
     lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing'],
};
```
```javascript
// плохо
const hero = {
  firstName: 'Dana',
  lastName: 'Scully'
};


// хорошо
const hero = {
  firstName: 'Dana',
  lastName: 'Scully',
};


// плохо
function createHero(
  firstName,
  lastName,
  inventorOf
) {
  // ничего не делает
}

// хорошо
function createHero(
  firstName,
  lastName,
  inventorOf,
) {
  // ничего не делает
}

// хорошо (обратите внимание, что висячей запятой не должно быть после "rest"-параметра)
function createHero(
  firstName,
  lastName,
  inventorOf,
  ...heroArgs
) {
  // ничего не делает
}

// плохо
createHero(
  firstName,
  lastName,
  inventorOf
);

// хорошо
createHero(
  firstName,
  lastName,
  inventorOf,
);

// хорошо (обратите внимание, что висячей запятой не должно быть после "rest"-аргумента)
createHero(
  firstName,
  lastName,
  inventorOf,
  ...heroArgs
);
```

### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)

# Точка с запятой
Когда JavaScript встречает перенос строки без точки с запятой, он ипользует правило под названием [Автоматическая Вставка Точки с запятой (Automatic Semicolon Insertion)](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion), чтобы определить, стоит ли считать этот перенос строки как конец выражения и (как следует из названия) поместить точку с запятой в вашем коде до переноса строки. Однако, ASI содержит несколько странных форм поведения, и ваш код может быть сломан, если JavaScript неверно истолкует ваш перенос строки. Явное завершение ваших выражений и настройка вашего линтера для улавливания пропущенных точек с запятыми помогут вам предотвратить возникновение проблем.

>eslint: [`semi`](https://eslint.org/docs/rules/semi.html)

```javascript
// плохо - выбрасывает исключение
const luke = {}
const leia = {}
[luke, leia].forEach(jedi => jedi.father = 'vader')

// плохо - возвращает `undefined` вместо значения на следующей строке. Так всегда происходит, когда `return` расположен сам по себе, потому что ASI (Автоматическая Вставка Точки с запятой)!
function foo() {
  return
    'search your feelings, you know it to be foo'
}

// хорошо
const luke = {};
const leia = {};
[luke, leia].forEach((jedi) => {
  jedi.father = 'vader';
});

// хорошо
function foo() {
  return 'search your feelings, you know it to be foo';
}
```

### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)

# Стиль регистра: CamelCase.


> Cейчас у нас много где встречается регистр [Snake_case](https://ru.wikipedia.org/wiki/Snake_case), это пришло к нам из Ruby вместе с CoffeeScript-ом.

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
Это гарантирует, что вы не сможете переопределять значения, т.к. это может привести к ошибкам и к усложнению понимания кода.
> eslint: [`prefer-const`](https://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign.html)

```javascript
// очень-очень плохо
myVarA = 1;
myVarB = 2;

// плохо
var myVarA = 1;
var myVarB = 2;

// хорошо
const myVarA = 1;
const myVarB = 2;
```

Если вам необходимо переопределять значения, то используйте `let` вместо `var`.
Область видимости `let` — блок, у `var` — функция.
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

Не создавайте цепочки присваивания переменных. Такие цепочки создают неявные глобальные переменные.
>eslint: [`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)


```javascript
// плохо
(function example() {
  // JavaScript интерпретирует это, как
  // let a = ( b = ( c = 1 ) );
  // Ключевое слово let применится только к переменной a;
  // переменные b и c станут глобальными.
  let a = b = c = 1;
}());

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

 // хорошо
(function example() {
  let a = 1;
  let b = a;
  let c = a;
}());

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError

// тоже самое и для `const`
```


---
### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)

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

Используйте сокращенную запись свойств объекта.  Это короче и понятнее.
>eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

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
Только недопустимые идентификаторы помещаются в кавычки. Это улучшает подсветку синтаксиса, а также облегчает оптимизацию для многих JS движков.
>eslint: [`quote-props`](https://eslint.org/docs/rules/quote-props.html)

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

Используйте точечную нотацию для доступа к свойствам. 

>eslint: [`dot-notation`](https://eslint.org/docs/rules/dot-notation.html)

```javascript
const luke = {
  jedi: true,
  age: 28,
};

// плохо
const isJedi = luke['jedi'];

// хорошо
const isJedi = luke.jedi;
```


### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)
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

Используйте операторы `return` внутри функций обратного вызова в методах массива. Можно опустить `return`, когда тело функции состоит из одной инструкции, возвращающей выражение без побочных эффектов.
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
### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)
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
Работать с разбитыми строками неудобно и это затрудняет поиск по коду.

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
Шаблонные строки дают вам читабельность, лаконичный синтаксис с правильными символами перевода строк и функции интерполяции строки.
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
Обратные слеши ухудшают читабельность, поэтому они должны быть только при необходимости.
>eslint: [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)
```javascript
  // плохо
  const foo = '\'this\' \i\s \"quoted\"';
  // хорошо
  const foo = '\'this\' is "quoted"';
  const foo = `my name is '${name}'`;
```

Старайтесь не допускать, чтобы строки кода были длиннее 100 символов (включая пробелы). Длинные строки с текстом освобождаются от этого правила и не должны разбиваться на несколько строк. 

Это обеспечивает удобство чтения и поддержки кода.
>eslint: [`max-len`](https://eslint.org/docs/rules/max-len.html)

```javascript
// плохо
const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;

// хорошо
const foo = jsonData
  && jsonData.foo
  && jsonData.foo.bar
  && jsonData.foo.bar.baz
  && jsonData.foo.bar.baz.quux
  && jsonData.foo.bar.baz.quux.xyzzy;
```


### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)

# Функции

Название функций должно быть глаголом. Если помимо глагола нужны ещё какие-то пояснения, то глагол должен стоять вначале. Функциями так же являются и шаги в графе, и методы скрипта.

Функция, которая возвращает булевое значение (`true` или `false`), назвается — `Предикат`. Её название начинается с глагола `is...` (например: `isArray()`).
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

`...` явно говорит о том, какие именно аргументы вы хотите извлечь. Кроме того, такой синтаксис создает настоящий массив, а не массиво-подобный объект как `arguments`.

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
  // то ей присвоится пустой объект, а не то, что вы хотели.
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
Функции с многострочным определением или запуском должны содержать такие же отступы, как и другие многострочные списки в этом руководстве: с каждым элементом на отдельной строке, с запятой в конце элемента. 
>eslint: [`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline)

```javascript
// плохо
function foo(bar,
            baz,
            quux) {
  // ...
}

// хорошо
function foo(
  bar,
  baz,
  quux,
) {
  // ...
}

// плохо
console.log(foo,
  bar,
  baz);

// хорошо
console.log(
  foo,
  bar,
  baz,
);
```
### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)


# Стрелочные функции

Когда вам необходимо использовать анонимную функцию (например, при передаче встроенной функции обратного вызова), используйте стрелочную функцию. 

>eslint: [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback.html), [`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing.html)

Таким образом создается функция, которая выполняется в контексте `this`, который мы обычно хотим, а также это более короткий синтаксис.

 Если у вас есть довольно сложная функция, вы можете переместить эту логику внутрь ее собственного именованного функционального выражения.

```javascript
// плохо
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// хорошо
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```

Если тело функции состоит из одного оператора, возвращающего [выражение](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#Выражения) без побочных эффектов, то опустите фигурные скобки и используйте неявное возвращение. В противном случае, сохраните фигурные скобки и используйте оператор `return`. 

>eslint: [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens.html), [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style.html)

Синтаксический сахар. Когда несколько функций соединены вместе, то это лучше читается.

```javascript
// плохо
[1, 2, 3].map(number => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// хорошо
[1, 2, 3].map(number => `A string containing the ${number}.`);

// хорошо
[1, 2, 3].map(number => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// хорошо
[1, 2, 3].map((number, index) => ({
  [index]: number,
}));

// Неявный возврат с побочными эффектами
function foo(callback) {
  const val = callback();
  if (val === true) {
    // Сделать что-то, если функция обратного вызова вернет true
  }
}

let bool = false;

// плохо
foo(() => bool = true);

// хорошо
foo(() => {
  bool = true;
});
```

### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)

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
### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)

# Операторы сравнения и равенства

Используйте `===` и `!==` вместо `==` и `!=`.

Условные операторы, такие как if, вычисляются путем приведения к логическому типу `Boolean` через абстрактный метод `ToBoolean` и всегда следуют следующим правилам:
>eslint: [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq.html)

- `Object` соответствует `true`;
- `Undefined` соответствует `false`;
- `Null` соответствует `false`;
- `Boolean` соответствует значению булева типа;
- `Number` соответствует `false`, если `+0`, `-0`, or `NaN`, в остальных случаях `true`;
- `String` соответствует `false`, если строка пустая `''`, в остальных случаях `true`.

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

> Используйте сокращения для булевских типов, а для строк и чисел применяйте явное сравнение.

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

### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)

# Тернарные операторы

Тернарные операторы не должны быть вложены и в большинстве случаев должны быть расположены на одной строке.

>eslint: [`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary.html)

```javascript
// плохо
const foo = maybe1 > maybe2 ? 'bar' : value1 > value2 ? 'baz' : null;

// разбит на два отдельных тернарных выражения
const maybeNull = value1 > value2 ? 'baz' : null;

const foo = maybe1 > maybe2 ? 'bar' : maybeNull;

// отлично
const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
```

 Избегайте ненужных тернарных операторов

>eslint: [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary.html)

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

При смешивании операторов, помещайте их в круглые скобки. Единственное исключение — это стандартные арифметические операторы (`+, -, *` и `/`), так как их приоритет широко известен.

Это улучшает читаемость и уточняет намерения разработчика.

>eslint: [`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators.html)

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

Используйте фигурные скобки для `case` и `default`, если они содержат лексические декларации (например, `let`, `const`, `function`, и `class`). 


Лексические декларации видны во всем `switch` блоке, но инициализируются только при присваивании, которое происходит при входе в блок `case`. Возникают проблемы, когда множество `case` пытаются определить одно то же.

>eslint: [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations.html).
```javascript
// плохо
switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  case 3:
    function f() {
      // ...
    }
    break;
  default:
    class C {}
}

// хорошо
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3: {
    function f() {
      // ...
    }
    break;
  }
  case 4:
    bar();
    break;
  default: {
    class C {}
  }
}
```

### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)

# Приведение типов
Выполняйте приведение типов в начале инструкции.
* Строки;
>eslint: [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers#disallow-primitive-wrapper-instances-no-new-wrappers)
```javascript
// => this.reviewScore = 9;

// плохо
const totalScore = new String(this.reviewScore); // тип totalScore будет "object", а не "string"

// плохо
const totalScore = this.reviewScore + ''; // вызывает this.reviewScore.valueOf()

// плохо
const totalScore = this.reviewScore.toString(); // нет гарантии что вернется строка

// хорошо
const totalScore = String(this.reviewScore);
```
* Числа: Используйте `Number` и `parseInt` с основанием системы счисления; 
>eslint: [radix](https://eslint.org/docs/rules/radix#require-radix-parameter-radix) [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers#disallow-primitive-wrapper-instances-no-new-wrappers)

```javascript
const inputValue = '4';

// плохо
const val = new Number(inputValue);

// плохо
const val = +inputValue;

// плохо
const val = inputValue >> 0;

// плохо
const val = parseInt(inputValue);

// хорошо
const val = Number(inputValue);

// хорошо
const val = parseInt(inputValue, 10);
```
* Логические типы;
> eslint: [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers#disallow-primitive-wrapper-instances-no-new-wrappers)

```javascript
const age = 0;

// плохо
const hasAge = new Boolean(age);

// хорошо
const hasAge = Boolean(age);

// отлично
const hasAge = !!age;
```
### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)

# `map,forEach,filter,every/some`

Стараемся избавляться от циклов. При больших объемах читаемость заметно ухудшается.

---

## `forEach` VS `for`

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

**UPD: Если где-то неудобно использовать функции высшего порядка, то можно использовать циклы.**

---

## `forEach`

Метод «`arr.forEach(callback[, thisArg])`» используется для перебора массива.

Он для каждого элемента массива вызывает функцию callback.

Этой функции он передаёт три параметра `callback(item, i, arr)`:

- `item` – очередной элемент массива;
- `i` – его номер;
- `arr` – массив, который перебирается.

---

## `map`

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

## `every/some`

Эти методы используются для проверки массива.

- Метод «`arr.every(callback[, thisArg])`» возвращает `true`, если вызов `callback` вернёт `true` для каждого элемента `arr`;
- Метод «`arr.some(callback[, thisArg])`» возвращает `true`, если вызов `callback` вернёт `true` для какого-нибудь элемента `arr`.

```javascript
const arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

console.warn(arr.every(isPositive)); // false, не все положительные
console.warn(arr.some(isPositive)); // true, есть хоть одно положительное
```

---

## Итого:

- `forEach` – для перебора массива;
- `filter` – для фильтрации массива;
- `every/some` – для проверки массива;
- `map` – для трансформации массива в массив.

---

**UPD: Во многих ситуациях их использование позволяет написать код короче и понятнее, чем обычный перебор через for.**

### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)

# Инструменты
- Редактор
  
  Для разработки нет ограничений в выборе редактора, но мы советуем использовать [`VS Code`](https://code.visualstudio.com/).
  
  Рекомендуемые расширения:
  - graph(локальное, устанавливается вручную, путем копирования папки) подсветка синтаксиса для `.graph` файлов, сниппеты;
  - [`JavaScript (ES6) code snippets`](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets);
  - [`ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (для работы нужен конфиг с правилами);
  - [`stylelint`](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) (для работы нужен конфиг с правилами);
  - [`Code Spell Checker`](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker);
  - [`Bracket Pair Colorizer`](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer);
  - [`One Dark Pro`](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme) - тема;
  - [`vscode-icons`](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons) - иконки.
- Линтер - инструмент, который позволяет:
  - проводить анализ качества вашего кода;
  - соблюдать единый код стайл;
  - избегать глупых ошибок.

Установка линтера в Vs Code на примере [`ESlint`](https://eslint.org/)
1. Установите eslint:
```javascript
 npm install -g eslint
```
2. Установите расширение [`ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) в VS Code;

3. Eslint требует наличия конфигурационного файла `.eslintrc.js`. По умолчанию eslint ожидает размещение данного файла в корне проекта. Но можно указать к нему путь самостоятельно в файле настроек `VS CODE`: 
```json
"eslint.options": {
  "configFile": "/Users/username/work/.eslintrc.js", // пример
}
```

Установка линтера **`обязательна`**.

### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)

# Полезные ссылки
- [10 Tips for Javascript Debugging Like a PRO with Console](https://medium.com/appsflyer/10-tips-for-javascript-debugging-like-a-pro-with-console-7140027eb5f6)
- [The ultimate whatever-to-number conversion table:](https://stackoverflow.com/questions/17106681/parseint-vs-unary-plus-when-to-use-which/17106702#17106702)
- [Modern JS Cheatsheet](https://mbeaudru.github.io/modern-js-cheatsheet/)

# Список литературы

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript/)
- [CoffeeScript Style Guide (Middle_math)](https://github.com/uchiru/content/blob/master/doc/custom/middle_math_mos/style-guide-coffeescript.md)
- [Таблица типов](img/tableOfTypes.png)
---
### [<img src="img/arrow_up.svg" alt="js" height="15px" width="20px"/> К оглавлению](#Содержание)

# Changelog
* 19.07.2018: stable
