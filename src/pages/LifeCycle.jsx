import React from 'react'

const LifeCycle = () => {
  return (
    <div className="content-block">
      <h2 className="content-title">LifeCycle</h2>
      <hr />
      <h3 className="content-title">
        Основные этапы жизненного цикла компонента
      </h3>
      <div className="content-text">
        <p>
          <b>1. Монтирование (Mounting)</b>
        </p>
        <p>Это этап, когда компонент создаётся и вставляется в DOM.</p>
        <p>Основные методы:</p>
        <ul>
          <li>
            <p>
              <b>constructor:</b>Здесь происходит инициализация состояния и
              привязка методов.
            </p>
            <div className="content-code">
              <pre>
                <code>{`
constructor(props) {
  super(props);
  this.state = { data: null };
}
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>render:</b> Метод, который возвращает JSX-разметку. Вызывается
              при создании и обновлении компонента.
            </p>
          </li>
          <li>
            <p>
              <b>componentDidMount:</b>Вызывается один раз после того, как
              компонент вставлен в DOM. Отличное место для запросов к серверу,
              подписки на события или установки таймеров.
            </p>
            <div className="content-code">
              <pre>
                <code>{`
componentDidMount() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => this.setState({ data }));
}
        `}</code>
              </pre>
            </div>
          </li>
        </ul>
      </div>
      <div className="content-text">
        <p>
          <b>2. Обновление (Updating)</b>
        </p>
        <p>
          Компонент может обновляться, когда изменяются его props или state.
        </p>
        <p>Основные методы:</p>
        <ul>
          <li>
            <p>
              <b>shouldComponentUpdate:</b>Позволяет контролировать, следует ли
              перерисовывать компонент. Можно использовать для оптимизации
              производительности.
            </p>
          </li>
          <li>
            <p>
              <b>render:</b> Вызывается снова для обновления отображения.
            </p>
          </li>
          <li>
            <p>
              <b>componentDidUpdate:</b>Вызывается сразу после обновления
              компонента. Здесь можно, например, реагировать на изменение
              данных, выполнять дополнительные запросы или работать с изменённым
              DOM.
            </p>
            <div className="content-code">
              <pre>
                <code>{`
componentDidUpdate(prevProps, prevState) {
  if (prevState.data !== this.state.data) {
    console.log('Данные обновились!');
  }
}
        `}</code>
              </pre>
            </div>
          </li>
        </ul>
      </div>
      <div className="content-text">
        <p>
          <b>3. Размонтирование (Unmounting)</b>
        </p>
        <p>Это момент, когда компонент удаляется из DOM.</p>
        <p>Основной метод:</p>
        <ul>
          <li>
            <p>
              <b>componentWillUnmount:</b>Здесь происходит очистка: отписка от
              событий, остановка таймеров, отмена сетевых запросов. Это помогает
              избежать утечек памяти.
            </p>
            <div className="content-code">
              <pre>
                <code>{`
componentWillUnmount() {
  // Отписываемся от событий, очищаем таймеры и т.д.
  console.log('Компонент удалён');
}
        `}</code>
              </pre>
            </div>
          </li>
        </ul>
      </div>
      <div className="content-text">
        <p>
          <b>4. Обработка ошибок (Error Handling)</b>
        </p>
        <p>
          Если во время работы компонента происходит ошибка, можно её
          перехватить и обработать.
        </p>
        <p>Основные методы:</p>
        <ul>
          <li>
            <p>
              <b>static getDerivedStateFromError(error):</b>Позволяет обновить
              состояние, чтобы отобразить запасной UI при возникновении ошибки.
            </p>
          </li>
          <li>
            <p>
              <b>componentDidCatch(error, info):</b> Позволяет записать
              информацию об ошибке или отправить её на сервер для дальнейшего
              анализа.
            </p>
          </li>
        </ul>
      </div>
      <hr />
      <h3 className="content-title">
        Жизненный цикл функциональных компонентов
      </h3>
      <div className="content-text">
        <p>
          <b>useEffect</b> - это хук в React, предназначенный для работы с
          методами жизненного цикла в функциональных компонентах. По сути вот
          ОДИН ТАКОЙ ХУК заменяет ОСНОВНЫЕ методы жизненного цикла.
        </p>
      </div>
      <div className="content-text">
        <ul>
          <li>
            <b>Первый параметр:</b> Функция, которая должна выполниться при
            монтировании компонента и при каждом обновлении.
          </li>
          <li>
            <b>Второй параметр:</b> Массив зависимостей определяет, на что
            конкретно должен реагировать useEffect. Если массив пуст, useEffect
            выполняется только при монтировании и размонтировании. Если в
            массиве указаны определенные значения, то useEffect будет
            выполняться только тогда, когда эти значения изменяются.
          </li>
        </ul>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
// Отработает как componentDidMount
useEffect(() => { console.log("componentDidMount") }, []) 

// Отработает как componentDidUpdate (но есть прикол. Покажу ниже)
useEffect(() => { console.log("componentDidUpdate") }, [dependency]) 

// Отработает как componentDidMount и componentDidUpdate
useEffect(() => { console.log("componentDidMount и componentDidUpdate") }) 

 // Отработает как componentWillUnmount
useEffect(() => {
  return () => console.log('componentWillUnmount')
}, [])
        `}</code>
        </pre>
      </div>
      <div className="content-text">
        <ol>
          <li>
            <p>
              <b>Mounting (Монтирование):</b>
            </p>
            <p>
              <b>
                <code>{`useEffect(() => {}, [])`}</code>
              </b>
              : Заменяет componentDidMount(). Выполняет побочные эффекты только
              один раз после монтирования. Передавая пустой массив зависимостей
              [], можно сделать хук useEffect аналогом componentDidMount.
            </p>
          </li>
          <li>
            <p>
              <b>Updating (Обновление):</b>
            </p>
            <ul>
              <li>
                <b>
                  <code>{`useEffect(() => {}, [dependency]):`}</code>
                </b>
                Заменяет componentDidUpdate(). Позволяет указать зависимость для
                выполнения функции только при изменении определенных props или
                state. Что передашь, за тем и будет следить 🤔 и при изменении
                вызовет функцию.
              </li>
              <li>
                <b>
                  <code>{`useEffect(() => {})`}</code>:
                </b>
                Выполняет функцию после каждого рендеринга компонента.
                Отрабатывает как componentDidMount() и componentDidUpdate()
              </li>
            </ul>
          </li>
          <li>
            <p>
              <b>Unmounting (Размонтирование):</b>
            </p>
            <b>
              <code>{`useEffect(() => () => {})`}</code>:
            </b>{' '}
            Заменяет componentWillUnmount(). Выполняет очистку и отписку от
            побочных эффектов при размонтировании (удалении из DOM) компонента.
          </li>
        </ol>
      </div>
    </div>
  )
}

export default LifeCycle
