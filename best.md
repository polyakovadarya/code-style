
  <a name="arrays--from"></a><a name="4.4"></a>
  - [4.4](#arrays--from) Для преобразования массиво-подобного объекта в массив используйте оператор расширения `...` вместо [`Array.from`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

    ```javascript
    const foo = document.querySelectorAll('.foo');

    // хорошо
    const nodes = Array.from(foo);

    // отлично
    const nodes = [...foo];
    ```

  <a name="arrays--mapping"></a><a name="4.5"></a>
  - [4.5](#arrays--mapping) Используйте [Array.from](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from) вместо оператора расширения `...` для маппинга итерируемых объектов, это позволяет избежать создания промежуточного массива.

    ```javascript
    // плохо
    const baz = [...foo].map(bar);

    // хорошо
    const baz = Array.from(foo, bar);
    ```


<a name="destructuring--object"></a><a name="5.1"></a>
  - [5.1](#destructuring--object) При обращении к нескольким свойствам объекта используйте деструктуризацию объекта. eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)

    > Почему? Деструктуризация избавляет вас от создания временных переменных для этих свойств.

    ```javascript
    // плохо
    function getFullName(user) {
      const firstName = user.firstName;
      const lastName = user.lastName;

      return `${firstName} ${lastName}`;
    }

    // хорошо
    function getFullName(user) {
      const { firstName, lastName } = user;
      return `${firstName} ${lastName}`;
    }

    // отлично
    function getFullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    }
    ```


    <a name="destructuring--object-over-array"></a><a name="5.3"></a>
Используйте деструктуризацию объекта для множества возвращаемых значений, но не делайте тоже самое с массивами.

    > Почему? Вы cможете добавить новые свойства через некоторое время или изменить порядок без последствий.

    ```javascript
    // плохо
    function processInput(input) {
      // затем происходит чудо
      return [left, right, top, bottom];
    }

    // при вызове нужно подумать о порядке возвращаемых данных
    const [left, __, top] = processInput(input);

    // хорошо
    function processInput(input) {
      // затем происходит чудо
      return { left, right, top, bottom };
    }

    // при вызове выбираем только необходимые данные
    const { left, top } = processInput(input);
    ```

<a name="functions--spread-vs-apply"></a><a name="7.14"></a>
  - [7.14](#functions--spread-vs-apply) Отдавайте предпочтение использованию оператора расширения `...` при вызове вариативной функции. eslint: [`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)

    > Почему? Это чище, вам не нужно предоставлять контекст, и не так просто составить `new` с `apply`.

    ```javascript
    // плохо
    const x = [1, 2, 3, 4, 5];
    console.log.apply(console, x);

    // хорошо
    const x = [1, 2, 3, 4, 5];
    console.log(...x);

    // плохо
    new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

    // хорошо
    new Date(...[2016, 8, 5]);
    ```


 <a name="es2016-properties--exponentiation-operator"></a><a name="12.3"></a>
  - [12.3](#es2016-properties--exponentiation-operator) Используйте оператор `**` для возведения в степень. eslint: [`no-restricted-properties`](https://eslint.org/docs/rules/no-restricted-properties).

    ```javascript
    // плохо
    const binary = Math.pow(2, 10);

    // хорошо
    const binary = 2 ** 10;
    ```

```javascript
// без покдлючения дополнительных библитек, можно вызывать вспомогательные функции находящиеся в FIXME:

// узнать позиционирвание jq-объекта относительно другого
$$.offset(host, element) // {top: 00px, left: 00px};

// пример 
$$.offset(this.scene, this.apple)
```

Для анимаций лучше использовать Velocity.js (/component/vendor/velocityFIXME:?), чем jquery анимации. Velocity плавнее, быстрее, имеет бОльший функционал (анимация цвета, манипуляция с SVG, возврат промисов и прочее).

Ипользование:
```javascript
$element.velocity({ top: 50 }, 1000, cb); // jq-style

$.Velocity(el, { opacity: 1 }); // возвращает промис, удобно использовать в последовательных анимациях ипользуя `async await` или чейн промисов `Promise().then()`
```

Полная документация с примерами на [Velocity](http://velocityjs.org/).

>` TODO: где то должно быть описание, то что свои функции заносим в $$`

## Полезные функции при работе с анимациями для частых кейсов

```javascript
// возвращает координаты центра элемента
$$.getCenterPosition = (el, host) => {
  const elemPosition = $$.offset(host, el);
  const halfElemWidth = el.outerWidth() / 2;
  const halfElemHeight = el.outerHeight() / 2;
  return {
    left: elemPosition.left + halfElemWidth,
    top: elemPosition.top + halfElemHeight,
  };
};

// возвращает новые координаты для элемента, который нужно переместить в центр другого элемента.
$$.placeToCenterPosition = (el, host, movingEl) => {
  const elemPosition = $$.offset(host, el);
  const halfElemWidth = el.outerWidth() / 2;
  const halfElemHeight = el.outerHeight() / 2;
  const halfMovingElWidth = movingEl.outerWidth() / 2;
  const halfMovingElHeight = movingEl.outerWidth() / 2;
  return {
    left: (elemPosition.left + halfElemWidth) - halfMovingElWidth,
    top: (elemPosition.top + halfElemHeight) - halfMovingElHeight,
  };
};

// анимирует элемент до автоширины. Удобно применять для появления элементов изначально со стилям width: 0, opacity: 0
$$.animToAutoWidth = (el) => {
  const curWidth = el.width();
  const autoWidth = el.css('width', 'auto').width() + 2;
  el.width(curWidth);
  return $.Velocity(el, { width: autoWidth })
    .then(() => el.css({ width: 'auto' }));
};
// после анимации изменяем opacity. Вернет промис
$.Velocity(el, { opacity: 1 });

// создание очереди. Пример для транзишн анимации тоглим классы
this.obj.addClass('red').delay(1000).queue(() => {
  this.obj.removeClass('red').dequeue(cb());
});
```

```css
// при большом количестве спрайтов удобно пользоваться циклами
$sprites: (
  ("fish-blue",ASSET_PATH('assets/img/fish-blue.svg'), 292px, 124px, 40px, 200px),
  ("fish-gold",ASSET_PATH('assets/img/fish-gold.svg'), 241px, 118px, 225px ,365px),
  ("fish-grey",ASSET_PATH('assets/img/fish-grey.svg'), 226px, 142px, 550px ,300px),
  ("fish-catfish",ASSET_PATH('assets/img/fish-catfish.svg'), 353px, 142px, 360px, 153px),
  ("scale-blue",ASSET_PATH('assets/img/scale-blue.svg'), 90px, 92px, 850px, 100px),
  ("scale-gold",ASSET_PATH('assets/img/scale-gold. svg'), 90px, 92px, 850px, 250px),
  ("scale-grey",ASSET_PATH('assets/img/scale-grey. svg'), 90px, 92px, 850px, 400px),
  ("sticker",ASSET_PATH('assets/img/sticker.svg'), 336px, 224px, 40px, 160px)
);

@each $sprite in $sprites {
  .#{nth($sprite,1)} {
    background: nth($sprite, 2) no-repeat;
    background-size: nth($sprite, 3);
    width: nth($sprite, 3);
    height: nth($sprite, 4);
    left: nth($sprite, 5);
    top: nth($sprite, 6);
  }
}


@mixin animations ($funk... ) {
  -webkit-animation: $funk;
  -moz-animation: $funk;
  -o-animation: $funk;
  animation: $funk;
}
```


```scss
@at-root {
    @-webkit-keyframes shake {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(4deg);
      }
      20% {
        transform: rotate(0deg);
      }
      30% {
        transform: rotate(4deg);
      }
      40% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(4deg);
      }
      60% {
        transform: rotate(0deg);
      }
      70% {
        transform: rotate(4deg);
      }
      80% {
        transform: rotate(0deg);
      }
      90% {
        transform: rotate(4deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    @-moz-keyframes shake {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(4deg);
      }
      20% {
        transform: rotate(0deg);
      }
      30% {
        transform: rotate(4deg);
      }
      40% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(4deg);
      }
      60% {
        transform: rotate(0deg);
      }
      70% {
        transform: rotate(4deg);
      }
      80% {
        transform: rotate(0deg);
      }
      90% {
        transform: rotate(4deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    @-o-keyframes shake {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(4deg);
      }
      20% {
        transform: rotate(0deg);
      }
      30% {
        transform: rotate(4deg);
      }
      40% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(4deg);
      }
      60% {
        transform: rotate(0deg);
      }
      70% {
        transform: rotate(4deg);
      }
      80% {
        transform: rotate(0deg);
      }
      90% {
        transform: rotate(4deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    @keyframes shake {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(4deg);
      }
      20% {
        transform: rotate(0deg);
      }
      30% {
        transform: rotate(4deg);
      }
      40% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(4deg);
      }
      60% {
        transform: rotate(0deg);
      }
      70% {
        transform: rotate(4deg);
      }
      80% {
        transform: rotate(0deg);
      }
      90% {
        transform: rotate(4deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
```




```
initDragger-->
  fork(1)-->
      addShakePlate-->
      drag(drag_auto|.plate)-->
      animate_after_drag-->
      join(1);
```

```

// addShakePlate
$$.Script.prototype.addShakePlate = async function (cb) {
  setTimeoutOrig(() => {
    this.intervalId = setInterval(() => {
      // if some plate was already placed, don't animate the shaking
      const draggedPlates = this.com.dragger.plates.filter((plate) => plate.hasClass('dragged'));
      if (draggedPlates.length > 0) {
        clearInterval(this.intervalId);
      } else {
        this.com.dragger.plates.forEach((plate) => {
          plate.addClass('shake');
          setTimeoutOrig(() => {
            plate.removeClass('shake');
          }, 1000);
        });
      }
    }, this.intervalDuration);
  }, 4000);
  cb();


  // this.com.dragger.plates.forEach((plate) => {
  //   if (!plate.hasClass('dragged')) {
  //     plate.addClass('shake-anim');
  //   }
  // });
};
```