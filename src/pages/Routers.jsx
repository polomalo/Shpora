import React from 'react'

const Routers = () => {
  return (
    <div className="content-block">
      <h2 className="content-title">Роутинг в React</h2>
      <hr />
      <div className="content-text">
        <p>
          Роутинг обеспечивает плавную навигацию между разделами приложения, не
          перезагружая страницу. Он позволяет обновлять только необходимые
          компоненты или данные, улучшая пользовательский опыт. Благодаря
          роутингу, приложение может динамически адаптироваться к параметрам
          маршрута, например, отображая данные определённого пользователя по его
          ID.
        </p>
      </div>
      <h3 className="content-title">Установка и настройка React Router</h3>
      <div className="content-text">
        <p>
          Прежде чем ты начнешь использовать React Router в проекте, необходимо
          установить его с помощью менеджера пакетов npm или yarn.
        </p>
        <p>
          Для установки React Router с помощью npm выполни следующую команду:{' '}
          <b>npm install react-router</b>
        </p>
      </div>
      <h3 className="content-title">Импорт и использование BrowserRouter</h3>
      <div className="content-text">
        <p>
          После установки React Router ты можешь начать использовать его в
          проекте. Для этого ты должен импортировать необходимые компоненты и
          обернуть приложение в BrowserRouter.
        </p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
        `}</code>
        </pre>
      </div>
      <h3 className="content-title">Основные компоненты React Router</h3>
      <div className="content-text">
        <ol>
          <li>
            <p>
              <b>Routes</b>
            </p>
            <p>
              Routes - это компонент-контейнер, в котором определяют все
              маршруты в приложении. Мы используем Routes для группировки
              нескольких Route компонентов. Вот пример:
            </p>
            <div className="content-code">
              <pre>
                <code>{`
import { Routes, Route } from 'react-router';

// ...

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>Route</b>
            </p>
            <p>
              Route - это компонент, который определяет отдельный маршрут внутри
              Routes. Каждый Route имеет свой путь (path) и элемент (element),
              который будет отображаться, когда маршрут совпадает. Вот пример:
            </p>
            <div className="content-code">
              <pre>
                <code>{`
import { Routes, Route } from 'react-router';

// ...

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>Link</b>
            </p>
            <p>
              Link используется для создания ссылок для навигации между
              маршрутами в приложении.
            </p>
            <div className="content-code">
              <pre>
                <code>{`
import { Link } from 'react-router';

// ..

<Link to="/">Главная</Link>
<Link to="/about">О нас</Link>
<Link to="/contact">Контакты</Link>
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>NavLink</b>
            </p>
            <p>
              NavLink позволяет создавать активные ссылки по текущему активному
              маршруту.
            </p>
            <div className="content-code">
              <pre>
                <code>{`
import { NavLink } from 'react-router';

// ...

<NavLink
  to="/faq"
  className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
  }
>
  FAQs
</NavLink>

<NavLink
to="/messages"
className={({ isActive }) =>
isActive ? "text-red-500" : "text-black"
	}
>
Messages
</NavLink>
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>useNavigate</b>
            </p>
            <p>
              useNavigate - это хук, который позволяет перенаправлять
              пользователя на другие маршруты в React Router.
            </p>
            <div className="content-code">
              <pre>
                <code>{`
import { useNavigate } from 'react-router';

// ...

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Домашняя страница</h1>
      <button onClick={handleClick}>Перейти к странице О нас</button>
    </div>
  );
};
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>useParams</b>
            </p>
            <p>
              {`useParams`} - это хук, который позволяет получать параметры из
              маршрута в React Router. Когда ты используешь {`useParams`}, ты
              можешь получить объект {`params`}, который содержит значения
              параметров из текущего маршрута. Вот пример:
            </p>
            <div className="content-code">
              <pre>
                <code>{`
import { useParams } from 'react-router';

// ...

const UserProfile = () => {
  const params = useParams();

  return (
    <div>
      <h1>Профиль пользователя: {params.username}</h1>
    </div>
  );
};
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>useLocation</b>
            </p>
            <p>
              {`useLocation `} - это хук, который позволяет получать информацию
              о текущем URL и его параметрах в React Router.
            </p>
            <div className="content-code">
              <pre>
                <code>{`
import { useLocation } from 'react-router';

// ...

const Page = () => {
  const location = useLocation();

  return (
    <div>
      <h1>Текущий URL: {location.pathname}</h1>
    </div>
  );
};
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>Outlet </b>
            </p>
            <p>
              Играет ключевую роль в отображении компонентов, соответствующих
              текущему маршруту. Когда ты используешь Outlet, он служит
              контейнером для отображения компонентов, которые соответствуют
              маршрутам в твоем приложении. Вот пример:
            </p>
            <div className="content-code">
              <pre>
                <code>{`
import { Outlet } from 'react-router';

// ...

const App = () => {
  return (
    <div>
      <h1>Мое приложение</h1>
      <nav>
        {/* Навигационные ссылки */}
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
        `}</code>
              </pre>
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Routers
