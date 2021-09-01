# Тестовое задание 

Тестовое задание для соискателя на должность frontend-разработчика 

Задача: разработать веб-приложение, обеспечивающее динамическое формирование веб-страницы. Распарсить, приложенную к заданию, json-конфигурацию и нарисовать на ее основе веб-страницу, содержащую Таблицу и редактируемую Форму справа от нее. Форма содержит список компонентов, каждый из которых является конфигурируемым и ссылается на поле из Таблицы. При выделении строки в Таблице Форма должна обновляться.

Дополнительное (необязательное) задание: написать сервис на node.js, который будет возвращать json-конфигурацию (например, через axios).

Задание необходимо выполнить на одном из 2 фреймворков - Vue или React. Предпочтительней всего на Vue 3.0 (используемый в проекте, на который подбирается исполнитель). Для выполнения желательно не использовать сторонние библиотеки, на подобие Quazar. Сборщик можно использовать Vue Cli. При выполнении задания, в первую очередь, оценивается чистота кода. Плюсом при выполнении задания будет задействование технологий: TypeScript, Vuex, LocalStorage, Router.

Результаты выполнения задания следует оформить на GitHub. Дополнительно опишите, как Вы тестировали результат своей работы в README.md - какие используете инструменты и как Вы осуществляете тестирование.

Расшифровка json-конфигурации:

```
ct - тип компонента формы (1 - edit, 2 - select, 3 - checkbox)
cw - ширина компонента в пикселах
gn - порядковый номер компонента на форме
ns - отображаемое имя компонента
rv - ссылка на поле Таблицы
sl - описание справочника select-компонента
```
Пример json-конфигурации, получаемой с сервера, написан и приложен к заданию.
```
{
  "table": [
    {
      "id": 1,
      "_foreigner": false,
      "_name": "Имя1",
      "_sex": 1
    },
    {
      "id": 2,
      "_foreigner": true,
      "_name": "Имя2",
      "_sex": 2
    },
    {
      "id": 3,
      "_foreigner": true,
      "_name": "Имя3",
      "_sex": 1
    },
    {
      "id": 4,
      "_foreigner": true,
      "_name": "Имя4",
      "_sex": 2
    },
    {
      "id": 5,
      "_foreigner": false,
      "_name": "Имя5",
      "_sex": 2
    },
    {
      "id": 6,
      "_foreigner": false,
      "_name": "Имя6",
      "_sex": 2
    },
    {
      "id": 7,
      "_foreigner": false,
      "_name": "Имя7",
      "_sex": 1
    }
  ],
  "formData": [
    {
      "id": 1,
      "ct": 1,
      "cw": 215,
      "gn": 1,
      "ns": "Имя",
      "rv": "_name"
    },
    {
      "id": 2,
      "ct": 3,
      "cw": 130,
      "gn": 2,
      "ns": "Иностранец",
      "rv": "_foreigner"
    },
    {
      "id": 3,
      "ct": 2,
      "cw": 100,
      "gn": 3,
      "ns": "Пол",
      "rv": "_sex",
      "sl": [
        {
          "id": 1,
          "name": "муж"
        },
        {
          "id": 2,
          "name": "жен"
        }
      ]
    }
  ]
}
```
Пример результата выполнения задания:
https://user-images.githubusercontent.com/83217262/116071150-992f7580-a69e-11eb-96ae-23ba07d107f8.gif

### Демонстрация:
https://slay9090.github.io/imc-test-task

### Использованные технологии:

- Vue.js 3
- TypeScript
- Vuex
- Router

### Тестирование и отладка:

- DevTools браузера, наше всё, от вестки до производительности 
- console.log() да, да.. точки останова для слабых)
- eslint помогает выявить потенциальные проблемы, не отключайте его
- TypeScript Console там по ТСу 
- Vue.js devtools плагин, Vuex удобно чекать




