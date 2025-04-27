import React from 'react'

const Refs = () => {
  return (
    <div className="content-block">
      <h2 className="content-title">Refs</h2>
      <hr />
      <div className="content-text">
        <p>
          Refs (сокр. от "references") в React позволяют получить доступ к
          DOM-элементам или компонентам напрямую. Это своего рода «обходной
          путь», который даёт тебе возможность взаимодействовать с элементами
          вне обычного React-потока данных.
        </p>
      </div>
      <h3 className="content-title">Зачем нужны Refs?</h3>
      <div className="content-text">
        <ol>
          <li>
            <p>Доступ к DOM-элементам:</p>
            <p>
              Например, для управления фокусом, выделением текста или выполнения
              анимаций.
            </p>
            <div className="content-code">
              <pre>
                <code>{`
const inputRef = useRef();

function focusInput() {
  inputRef.current.focus();
}

return (
  <div>
    <input ref={inputRef} type="text" />
    <button onClick={focusInput}>Фокус</button>
  </div>
);
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>Работа с внешними библиотеками:</p>
            <p>
              Например, для интеграции с библиотеками, которые манипулируют DOM
              напрямую (например, Chart.js или Three.js).
            </p>
          </li>
        </ol>
      </div>
      <h3 className="content-title">Почему не стоит злоупотреблять Refs?</h3>
      <div className="content-text">
        <ol>
          <li>
            <p>
              <b>Обход React-философии:</b>
            </p>
            <p>
              Использование Refs идёт вразрез с основными принципами React
              (однонаправленный поток данных). Если злоупотреблять ими, это
              приведёт к созданию сложного и запутанного кода.
            </p>
          </li>
          <li>
            <p>
              <b>Трудности тестирования и поддержки:</b>
            </p>
            <p>
              Логика, завязанная на Refs, делает код менее предсказуемым и
              сложным в отладке.
            </p>
          </li>
          <li>
            <p>
              <b>Проблемы с производительностью:</b>
            </p>
            <p>
              Обращение к DOM через Refs может негативно сказаться на
              производительности, особенно в сложных приложениях.
            </p>
          </li>
        </ol>
      </div>
      <div className="content-text">
        <p>
          Лучше стараться использовать state и props для управления данными и
          поведением, а Refs применять только в исключительных случаях.
        </p>
      </div>
      <hr />
      <h3 className="content-title">Что такое forwardRef?</h3>
      <div className="content-text">
        <p>
          forwardRef — это инструмент, который позволяет передавать Ref в
          дочерний компонент. Это полезно, когда тебе нужно получить доступ к
          DOM-элементу, который находится внутри кастомного компонента.
        </p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

function App() {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Фокус</button>
    </div>
  );
}
        `}</code>
        </pre>
      </div>
      <hr />
      <h3 className="content-title">Fragment</h3>
      <div className="content-text">
        <p>
          RFragment в React — это вспомогательный компонент, который позволяет
          оборачивать несколько дочерних элементов без добавления лишнего
          элемента в DOM. Это полезно, если тебе нужно вернуть несколько
          элементов, но ты не хочешь создавать дополнительный{' '}
          <code>{`<div>`}</code> или другой контейнер.
        </p>
      </div>
      <h3 className="content-title">Зачем нужен Fragment?</h3>
      <div className="content-text">
        <ul>
          <li>
            <b>Избегает лишних обёрток в DOM:</b> Дополнительные контейнеры
            могут усложнять стилизацию и негативно влиять на производительность.
          </li>
          <li>
            <b>Улучшает читаемость JSX:</b> Код становится проще и понятнее.
          </li>
        </ul>
      </div>
      <h3 className="content-title">Как использовать Fragment?</h3>
      <div className="content-text">
        <p>
          <b>
            С помощью тега <code>{`<React.Fragment>`}</code>:
          </b>
        </p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
function App() {
  return (
    <React.Fragment>
      <h1>Hello Child Component</h1>
	    <h1>Hello Child Component</h1>
    </React.Fragment>
  );
}
        `}</code>
        </pre>
      </div>
      <div className="content-text">
        <p>
          <b>
            С помощью короткого синтаксиса <code>{`(<>)`}</code>:
          </b>
        </p>
        <p>
          Существует сокращенная запись (импортировать не нужно) - недостаток
          сокращенной записи: нельзя использовать атрибуты, например id или key
          😿:
        </p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
import React, { Fragment } from 'react';

//так хорошо
const ChildComponent = () => <>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>

// так нельзя. Будет ошибка
const ChildComponent = () => < id="child" >
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>
        `}</code>
        </pre>
      </div>
      <hr />
      <h3 className="content-title">key</h3>
      <div className="content-text">
        <p>
          key — это уникальный идентификатор, который React использует для
          определения, какие элементы списка изменились, добавились или
          удалились. Без key React перерисовывает элементы списка неэффективно,
          что может привести к неожиданному поведению и падению
          производительности.
        </p>
        <p>Если не указать ключи, в консоли увидим сообщение: </p>
        <p>
          <b>
            Warning: Each child in an array or iterator should have a unique
            “key” prop.
          </b>
        </p>
      </div>
      <div className="content-text">
        <p>Основные правила использования key:</p>
        <ol>
          <li>
            <p>
              <b>Используй уникальные значения:</b>
            </p>
            <p>
              key должен быть уникальным для каждого элемента. Лучше всего
              использовать стабильные идентификаторы, такие как ID из данных.
              Если нет ID используй библиотеку uuid.
            </p>
          </li>
          <li>
            <p>
              <b>Не используй индекс массива:</b>
            </p>
            <p>
              Использование индекса как key может вызвать баги, особенно при
              изменении порядка элементов в списке.
            </p>
          </li>
          <li>
            <p>
              <b>Сохраняй стабильность ключей:</b>
            </p>
            <p>
              Убедись, что значение key не меняется между рендерами, иначе React
              будет считать элемент новым и удалять старый.
            </p>
          </li>
        </ol>
      </div>
      <div className="content-text">
        <p>
          <b>Лучшие практики:</b>
        </p>
        <ul>
          <li>
            <b>Используй key только там, где это нужно: </b>React оптимизирует
            список только при наличии key.
          </li>
          <li>
            <b>Не дублируй значения key: </b>Два одинаковых key в одном списке
            приведут к ошибкам.
          </li>
          <li>
            <b>Не добавляй key без необходимости: </b>Не нужно указывать key для
            элементов, которые не являются частью списка.
          </li>
        </ul>
      </div>
      <hr />
      <h3 className="content-title">React.memo</h3>
      <div className="content-text">
        <p>
          React.memo — это функция высшего порядка (HOC), которая используется
          для оптимизации функциональных компонентов.{' '}
          <b>
            Она предотвращает ненужные повторные рендеры, если пропсы компонента
            не изменились.
          </b>
        </p>
      </div>
      <h3 className="content-title">
        Что принимает и что возвращает React.memo?
      </h3>
      <div className="content-text">
        <p>Принимает (React.memo(Component, compareFunction?)):</p>
        <ol>
          <li>
            <b>Компонент</b>(обязательный параметр) – функциональный компонент,
            который нужно мемоизировать.
          </li>
          <li>
            <b>Функцию сравнения пропсов</b>(необязательный параметр) –
            кастомная функция для сравнения старых и новых пропсов.
          </li>
        </ol>
        <p>
          Возвращает новый мемоизированный компонент, который ререндерится
          только при изменении пропсов.
        </p>
      </div>
      <h3 className="content-title">Пример:</h3>
      <div className="content-code">
        <pre>
          <code>{`
const GreetingComponent = ({ name }) => {
  console.log('Рендер Greeting');
  return <h1>Привет, {name}!</h1>;
};

const Greeting = React.memo(GreetingComponent);
        `}</code>
        </pre>
      </div>
    </div>
  )
}

export default Refs
