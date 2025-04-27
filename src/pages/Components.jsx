import React from 'react'

const Components = () => {
  return (
    <div className="content-block">
      <h2 className="content-title">Components</h2>
      <hr />
      <div className="content-text">
        <p>
          Компоненты — это основа любого приложения на React. Это небольшие,
          переиспользуемые кусочки кода, которые управляют отображением и
          поведением пользовательского интерфейса.
        </p>
      </div>
      <h3 className="content-title">Виды компонентов</h3>
      <div className="content-text">
        <ol>
          <li>
            <p>
              <b>Функциональные компоненты</b> — это простые функции, которые
              принимают props и возвращают JSX. Они являются наиболее
              современным и популярным способом написания компонентов.
            </p>
            <div className="content-code">
              <pre>
                <code>{`
function Greeting() {
  return <h1>Привет, Pavel!</h1>;
}

<Greeting />;
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>Классовые компоненты</b> — это компоненты, которые создаются с
              использованием классов. Они использовались до появления хуков, но
              до сих пор встречаются в старых проектах.
            </p>
            <div className="content-code">
              <pre>
                <code>{`
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Привет, Pavel!</h1>;
  }
}

<Greeting />;
        `}</code>
              </pre>
            </div>
          </li>
        </ol>
      </div>
      <hr />
      <h3 className="content-title">Основные характеристики компонентов</h3>
      <div className="content-text">
        <ol>
          <li>
            <b>Независимость</b>
            <br />
            Каждый компонент работает независимо от других. Это значит, что
            изменения в одном компоненте не затронут другие.
          </li>
          <li>
            <b>Переиспользуемость</b>
            <br />
            Компоненты можно использовать повторно в разных частях приложения,
            что снижает количество дублирующегося кода.
          </li>
          <li>
            <b>Иерархия</b>
            <br />
            Компоненты могут быть вложенными: родительский компонент передаёт
            данные дочерним через props
            <div className="content-code">
              <pre>
                <code>{`
function ParentComponent() {
  return (
    <div>
      <ChildComponent message={"Привет от родителя!"} />
    </div>
  );
}

function ChildComponent({ message }) {
  return <p>{message}</p>;
}
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <b>Компонента должна себя вести как чистая функция</b>
            <br />
            “Чистой” называется функция, которая:
            <ul>
              <li>
                Для одинаковых входных данных всегда возвращает один результат.
              </li>
              <li>
                Не имеет побочных эффектов (то есть не изменяет внешние
                состояния).
              </li>
              <li>Не зависит от внешних состояний.</li>
            </ul>
          </li>
        </ol>
      </div>
      <hr />
      <h3 className="content-title">JSX и компоненты</h3>
      <div className="content-text">
        <p>
          JSX (от JavaScript XML) делает код React читаемым и похожим на HTML.
        </p>
        <p>
          <b>Как JSX работает с компонентами?</b>
        </p>
        <ol>
          <li>Каждый компонент возвращает JSX.</li>
          <li>
            JSX может содержать другие компоненты, элементы HTML или JavaScript.
          </li>
        </ol>
        <div className="content-code">
          <pre>
            <code>{`
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Это заголовок</h1>;
}

function MainContent() {
  return <p>Основной текст страницы</p>;
}

function Footer() {
  return <footer>Здесь футер</footer>;
}
        `}</code>
          </pre>
        </div>
      </div>
      <hr />
      <h3 className="content-title">Stateless VS Stateful</h3>
      <div className="content-text">
        <p>
          <b>Stateless компоненты </b>
        </p>
        <p>
          Они просто принимают props и возвращают JSX, который описывает, как
          должен выглядеть UI. Эти компоненты не имеют внутреннего состояния и
          не могут изменять свое поведение в зависимости от событий или действий
          пользователя.
        </p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
const Greeting = ({name}) => {
  return <h1>Hello, {name}!</h1>;
};
        `}</code>
        </pre>
      </div>
      <div className="content-text">
        <p>
          <b>Stateful компоненты</b>
        </p>
        <p>
          Stateful компоненты могут управлять состоянием и изменять свое
          поведение в зависимости от событий. Они используют внутреннее
          состояние, чтобы отслеживать изменения и обновлять UI в ответ на
          действия пользователя или другие события.
        </p>
        <p>
          С появлением хуков в React 16.8 функциональные компоненты могут также
          управлять состоянием и эффектами. Теперь можно создавать stateful
          функциональные компоненты с помощью хуков useState и useEffect.
        </p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
        `}</code>
        </pre>
      </div>
    </div>
  )
}

export default Components
