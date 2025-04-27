import React from 'react'

const Hoc = () => {
  return (
    <div className="content-block">
      <h2 className="content-title">HOС (Higher-Order Components)</h2>
      <hr />
      <div className="content-text">
        <p>
          HOC (Higher-Order Component) — это функции высшего порядка, которые
          принимают компонент и возвращают новый компонент с расширенным
          функционалом.
        </p>
      </div>
      <h3 className="content-title">Зачем нужен HOC?</h3>
      <div className="content-text">
        <p>
          Они помогают избежать дублирования кода, управлять состоянием,
          обеспечивают абстракцию поведения и позволяют добавлять
          функциональность к компонентам без изменения их кода.
        </p>
        <ol>
          <li>
            <p>
              <b>Повторное использование логики:</b>
            </p>
            <p>
              Когда тебе нужно добавить одну и ту же функциональность в
              несколько компонентов (например, логирование, обработку данных или
              доступ к контексту).
            </p>
          </li>
          <li>
            <p>
              <b>Управление доступом:</b>
            </p>
            <p>
              HOC может проверять права доступа или авторизацию перед
              рендерингом компонента.
            </p>
          </li>
          <li>
            <p>
              <b>Работа с побочными эффектами:</b>
            </p>
            <p>Например, подписка на события или запросы к API.</p>
          </li>
        </ol>
      </div>
      <h3 className="content-title">Как создать HOC?</h3>
      <div className="content-code">
        <pre>
          <code>{`
import React from 'react';

// HOC, который логирует каждый рендер
function withLogger(WrappedComponent) {
  return (props) => {
    console.log('Рендер компонента:', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}

// Пример использования HOC
function MyComponent({ name }) {
  return <p>Привет, {name}!</p>;
}

const MyComponentWithLogger = withLogger(MyComponent);

export default function App() {
  return <MyComponentWithLogger name="Павел" />;
}
        `}</code>
        </pre>
      </div>
      <h3 className="content-title">Недостатки HOC</h3>
      <div className="content-text">
        <ol>
          <li>
            <p>
              <b>Повышение сложности:</b>
            </p>
            <p>
              Если HOC вложены друг в друга, это может привести к так
              называемому «адскому дереву компонентов».
            </p>
          </li>
          <li>
            <p>
              <b>Проблемы с производительностью:</b>
            </p>
            <p>
              Каждый HOC оборачивает компонент, что увеличивает глубину дерева
              компонентов.
            </p>
          </li>
          <li>
            <p>
              <b>Проблемы с именованием:</b>
            </p>
            <p>
              HOC возвращает новый компонент, что может запутать отладку и
              отображение имени компонента в инструментах разработки.
            </p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Hoc
