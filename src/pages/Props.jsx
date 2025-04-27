import React from 'react'

const Props = () => {
  return (
    <div className="content-block">
      <h2 className="content-title">Props</h2>
      <hr />
      <div className="content-text">
        <p>
          Props (от англ. “properties”) — это механизм передачи данных между
          компонентами в React. Они делают React-компоненты повторно
          используемыми и универсальными.
        </p>
      </div>
      <h3 className="content-title">Что такое props?</h3>
      <div className="content-text">
        <ul>
          <li>
            Props — это объект, содержащий данные, которые передаются в
            компонент из его родителя.
          </li>
          <li>
            Props похожи на параметры функций: они предоставляют компонентам
            необходимую информацию для корректной работы.
          </li>
        </ul>
      </div>
      <h3 className="content-title">Аналогия: параметры функций</h3>
      <div className="content-text">
        <p>
          Представь, что props — это параметры, которые передаются функции при
          ее вызове. Вместо:
        </p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
function greet(name) {
  return 'Hello, {name}';
}
console.log(greet('Pavel')); // Hello, Pavel
        `}</code>
        </pre>
      </div>
      <div className="content-text">
        <p>В React ты можешь сделать компонент с props:</p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
<Greeting name={"Pavel"} />;
        `}</code>
        </pre>
      </div>
      <hr />
      <h3 className="content-title">Основы работы с Props</h3>
      <div className="content-text">
        <p>
          Props передаются в компоненты так же, как атрибуты в HTML-элементы.
        </p>
      </div>
      <h3 className="content-title">Передача данных через JSX</h3>
      <div className="content-text">
        <p>Синтаксис прост: данные указываются как атрибуты JSX:</p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
function Welcome(props) {
  return <h1>Welcome, {props.userName}!</h1>;
}

<Welcome userName={"Pavel"} />;
        `}</code>
        </pre>
      </div>
      <hr />
      <h3 className="content-title">Чтение Props в дочернем компоненте</h3>
      <div className="content-text">
        <p>Props доступны как объект внутри компонента:</p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
function Profile(props) {
  return <p>Name: {props.name}</p>;
}
<Profile name={"Pavel"} />;
        `}</code>
        </pre>
      </div>
      <h3 className="content-title">Деструктуризация props</h3>
      <div className="content-text">
        <p>
          Рекомендуется использовать деструктуризацию для более читаемого кода:
        </p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
function Profile({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
<Profile name={"Pavel"} age={27} />;
        `}</code>
        </pre>
      </div>
      <hr />
      <h3 className="content-title">Типы данных, передаваемые через Props</h3>
      <div className="content-text">
        <p>
          <b>Передача массивов и объектов</b>
        </p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

<TodoList todos={["Learn React", "Build a project", "Get a job"]} />;
        `}</code>
        </pre>
      </div>
      <div className="content-text">
        <p>
          <b>Передача функций</b>
        </p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
function Button(props) {
  return <button onClick={props.onClick}>Click Me</button>;
}

<Button onClick={() => console.log("Button clicked!")} />;
        `}</code>
        </pre>
      </div>
      <hr />
      <h3 className="content-title">
        Использование props.children в компонентах
      </h3>
      <div className="content-text">
        <p>
          props.children — это специальное свойство, которое автоматически
          передаётся в компонент, если внутри него вложены другие компоненты или
          элементы. Это позволяет создавать гибкие и универсальные компоненты.
        </p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
function Container({ children }) {
  return <div className="container">{children}</div>;
}

function App() {
  return (
    <Container>
      <h1>Welcome!</h1>
      <p>This is a reusable container component.</p>
    </Container>
  );
}
        `}</code>
        </pre>
      </div>
      <hr />
      <h3 className="content-title">
        !!!Пропсы являются неизменяемыми (immutable), их нельзя изменять
        напрямую.
      </h3>
    </div>
  )
}

export default Props
