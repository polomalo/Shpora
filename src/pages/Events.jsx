import React from 'react'

const Events = () => {
  return (
    <div className="content-block">
      <h2 className="content-title">Events и их методы</h2>
      <hr />
      <div className="content-text">
        <p>
          В React события (events) являются важной частью взаимодействия с
          пользователем. Они позволяют обрабатывать действия пользователя, такие
          как клики, наведение, отправка формы и другие.
        </p>
      </div>
      <div className="content-text">
        <p>
          Вот пять наиболее часто используемых событий в React и примеры их
          применения:
        </p>
      </div>
      <div className="content-text">
        <ol>
          <li>
            <p>
              <b>onClick (Клик):</b>
            </p>
            <p>
              Событие onClick возникает при клике на элементе. Это одно из
              наиболее распространенных событий в React.
            </p>
            <div className="content-code">
              <pre>
                <code>{`
const handleClick = () => {
  console.log('Кликнули!');
}

const MyComponent = () => {
  return (
    <button onClick={handleClick}>Нажми меня</button>
  );
}
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>onChange (Изменение):</b>
            </p>
            <p>
              Событие onChange возникает при изменении значения элемента формы,
              такого как текстовое поле (input), флажок (checkbox) или выбор
              элемента списка (radio).
            </p>
            <div className="content-code">
              <pre>
                <code>{`
const handleChange = (event) => {
  console.log('Изменилось значение:', event.target.value);
}

const MyComponent = () => {
  return (
    <input type="text" onChange={handleChange} />
    или
    <input type="text" onChange={event => handleChange(event)} />
  );
}
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>onSubmit (Отправка формы): </b>
            </p>
            <p>
              Событие onSubmit возникает при отправке формы. Оно позволяет
              выполнить действия, связанные с отправкой данных формы на сервер.
            </p>
            <div className="content-code">
              <pre>
                <code>{`
const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Форма отправлена!');
}

const MyComponent = () => {
  return (
    <form onSubmit={handleSubmit}>
      {/* поля формы */}
      <button type="submit">Отправить</button>
    </form>
  );
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>onMouseOver (Наведение курсора): </b>
            </p>
            <p>
              Событие onMouseOver возникает, когда курсор наводится на элемент.
              Оно может использоваться для отображения дополнительной информации
              или изменения состояния компонента при наведении.
            </p>
            <div className="content-code">
              <pre>
                <code>{`
const handleMouseOver = () => {
  console.log('Курсор наведен!');
}

const MyComponent = () => {
  return (
    <div onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
  );
}
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>onKeyDown (Нажатие клавиши): </b>
            </p>
            <p>
              Событие onKeyDown возникает при нажатии клавиши на клавиатуре. Оно
              позволяет реагировать на определенные комбинации клавиш или
              выполнять действия на основе нажатых клавиш.
            </p>
            <div className="content-code">
              <pre>
                <code>{`
const handleKeyDown = (event) => {
  console.log('Нажата клавиша:', event.key);
}

const MyComponent = () => {
  return (
    <input type="text" onKeyDown={handleKeyDown} />
  );
}
        `}</code>
              </pre>
            </div>
          </li>
        </ol>
      </div>
      <div className="content-text">
        <p>
          Существует множество других событий, таких как{' '}
          <b>onFocus, onBlur, onScroll</b> и т. д., которые могут быть
          использованы в зависимости от конкретных потребностей твоего
          приложения.
        </p>
      </div>
    </div>
  )
}

export default Events
