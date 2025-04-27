import React from 'react'
import Counter from '../components/Counter'

const State = () => {
  return (
    <div className="content-block">
      <h2 className="content-title">State</h2>
      <hr />
      <div className="content-text">
        <p>
          State (состояние) в React — это место, где компонент хранит свои
          динамические данные. Это как записная книжка, которую компонент
          использует для хранения текущего состояния и его изменения.
        </p>
        <p>
          <b>Чем отличается state от props?</b>
        </p>
        <ul>
          <li>
            Props передаются компоненту "снаружи", от родителя и неизменные.
          </li>
          <li>State управляется "внутри" компонента и изменяется.</li>
        </ul>
      </div>
      <h3 className="content-title">Создание и использование state</h3>
      <div className="content-text">
        <p>
          <b>Hook useState</b>
        </p>
        <p>
          В функциональных компонентах для работы с state используется хук
          useState.
        </p>
        <p>Он возвращает массив из двух элементов:</p>
        <ul>
          <li>
            <b>state:</b> текущее значение состояния
          </li>
          <li>
            <b>setState:</b> функцию для его обновления.
          </li>
        </ul>
        <p>
          а принимает initialState: начальное значение состояния. Может быть
          примитивным типом данных, объектом или функцией.
        </p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
import React, { useState } from 'react';

const [state, setState] = useState(initialState);
        `}</code>
        </pre>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increase</button>
    </div>
  );
}
        `}</code>
        </pre>
      </div>
      <Counter />
      <hr />
      <h3 className="content-title">Изменение state</h3>
      <div className="content-text">
        <p>State должен быть неизменяемым напрямую.</p>
        <p>
          Если ты попытаешься изменить его напрямую,
          <b>React не поймёт, что нужно обновить интерфейс:</b>
        </p>
        <p> Используй setState, чтобы сообщить React об изменении:</p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
setState(newValue);
        `}</code>
        </pre>
      </div>
      <div className="content-text">
        <p>
          <b>setState — асинхронный</b>
        </p>
      </div>
    </div>
  )
}

export default State
