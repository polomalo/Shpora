import React from 'react'

const Context = () => {
  return (
    <div className="content-block">
      <h2 className="content-title">Context</h2>
      <hr />
      <div className="content-text">
        <p>
          Context предоставляет способ{' '}
          <b>
            передачи данных через дерево компонентов без явной передачи пропсов
            от родительских компонентов к дочерним.
          </b>{' '}
          Это особенно полезно, когда необходимо передать данные глубоко в
          иерархии компонентов, избегая "просачивания" пропсов через несколько
          промежуточных компонентов.
        </p>
      </div>
      <h3 className="content-title">
        Какую проблему решает context? (props drilling)
      </h3>
      <div className="content-text">
        <p>
          В React пропс-дриллинг (props drilling) - это паттерн, который
          возникает, когда компоненту нужно передать данные через несколько
          уровней других компонентов. Он возникает, когда компоненты передают
          свойства (props) другим компонентам, чтобы они могли использовать эти
          данные.
        </p>
        <p>
          Пропс-дриллинг может стать проблемой, когда данные нужно передавать
          через несколько уровней компонентов, и при этом каждый компонент
          просто перенаправляет свойства следующему компоненту без реального
          использования этих свойств.
        </p>
      </div>
      <h3 className="content-title">Использование Context</h3>
      <div className="content-text">
        <p>Для работы с Context в React необходимо выполнить следующие шаги:</p>
        <ol>
          <li>
            <p>
              <b>Создание контекста</b>
            </p>
            <div className="content-code">
              <pre>
                <code>{`
// MyContext.js
import React from 'react';

const MyContext = React.createContext();

export default MyContext;
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>Предоставление значения контекста</b>
            </p>
            <div className="content-code">
              <pre>
                <code>{`
// App.js
import React from 'react';
import MyContext from './MyContext';
import ComponentA from './ComponentA';

const App = () => {
  const value = 'Hello, Context!';

  return (
    <MyContext.Provider value={value}>
      <ComponentA />
    </MyContext.Provider>
  );
}

export default App;
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>Использование хука useContext</b>
            </p>
            <div className="content-code">
              <pre>
                <code>{`
// ComponentA.js
import React, { useContext } from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';

function ComponentA() {
  const value = useContext(MyContext);

  return (
    <div>
      <h2>Component A</h2>
      <p>Received value from Context: {value}</p>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>Подписка на контекст (еще один вариант) </b>
            </p>
            <div className="content-code">
              <pre>
                <code>{`
// ComponentA.js
import React from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';

function ComponentA() {
  return (
    <div>
      <h2>Component A</h2>
      <MyContext.Consumer>
        {(value) => (
          <p>Received value from Context: {value}</p>
        )}
      </MyContext.Consumer>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
        `}</code>
              </pre>
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Context
