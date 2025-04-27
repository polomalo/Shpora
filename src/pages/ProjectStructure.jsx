import React from 'react'

const ProjectStructure = () => {
  return (
    <div className="content-block">
      <h2 className="content-title">Структура проекта. Modules VS FSD</h2>
      <hr />
      <div className="content-text">
        <p>
          Когда ты начинаешь писать проект на React первая проблема — как
          правильно организовать файлы и папки В отличие от фреймворков
          (Next.js, Angular), React не диктует конкретную структуру проекта. Ты
          сам решаешь, как организовать код, но есть популярные подходы, которые
          помогают избежать хаоса.
        </p>
      </div>
      <div className="content-text">
        <p>В этой главе разберём два подхода:</p>
        <ol>
          <li>
            Modules (разделение по страницам и переиспользуемым компонентам).
          </li>
          <li>
            FSD (Feature-Sliced Design) (разделение на уровни: app, pages,
            features, entities, shared).
          </li>
        </ol>
      </div>
      <h3 className="content-title">Modules vs FSD – в чём разница?</h3>
      <div className="content-table">
        <table>
          <thead>
            <tr>
              <td>Modules</td>
              <td>FSD (Feature-Sliced Design)</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Подходит для маленьких и средних проектов.</td>
              <td>Подходит для больших, сложных проектов.</td>
            </tr>
            <tr>
              <td>
                Делит код на pages (страницы) и components (переиспользуемые
                компоненты).
              </td>
              <td>
                Разделяет код по логическим уровням (features, entities,
                shared).
              </td>
            </tr>
            <tr>
              <td>Простая структура, легко освоить.</td>
              <td>Требует продуманного подхода.</td>
            </tr>
            <tr>
              <td>Может появиться запутанная архитектура при росте проекта.</td>
              <td>Облегчает поддержку и масштабирование.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="content-title">Modules</h2>
      <div className="content-text">
        <p>Структура проекта (Modules)</p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
  /src
    ├── /pages       # Страницы приложения
    │   ├── Home.jsx
    │   ├── Profile.jsx
    ├── /components  # Переиспользуемые UI-компоненты
    │   ├── Button.jsx
    │   ├── Input.jsx
    ├── /hooks       # Пользовательские хуки
    │   ├── useAuth.js
    │   ├── useFetch.js
    ├── /utils       # Утилиты (общие вспомогательные функции)
    │   ├── formatDate.js
    │   ├── debounce.js
    ├── /helpers     # Хелперы (функции, связанные с конкретными модулями)
    │   ├── authHelper.js
    │   ├── validationHelper.js
    ├── /redux       # Redux-хранилище и слайсы
    │   ├── store.js
    │   ├── authSlice.js
    │   ├── userSlice.js
    ├── /api         # Файлы для работы с сервером (запросы к API)
    │   ├── apiConfig.js
    │   ├── authApi.js
    │   ├── userApi.js
    ├── App.jsx      # Главный компонент
    ├── index.js     # Точка входа
        `}</code>
        </pre>
      </div>
      <div className="content-text">
        <ol>
          <li>
            pages — находятся страницы (Home, Profile) → они импортируют нужные
            компоненты.
          </li>
          <li>components — хранятся общие элементы UI (Button, Input).</li>
          <li>
            hooks — пользовательские хуки, которые можно переиспользовать в
            проекте.
          </li>
          <li>
            utils – для чистых функций, которые не зависят от React (например,
            formatDate, debounce).
          </li>
          <li>
            helpers – для функций-помощников, которые связаны с конкретными
            модулями (authHelper, validationHelper).
          </li>
          <li>redux – хранилище состояния, слайсы (store.js, authSlice.js).</li>
          <li>
            api – для работы с бэкендом, запросов к серверу (authApi.js,
            userApi.js).
          </li>
        </ol>
      </div>
      <h2 className="content-title">FSD</h2>
      <div className="content-text">
        <p>Структура проекта (FSD)</p>
      </div>
      <div className="content-code">
        <pre>
          <code>{`
  /src
    ├── /app        # Конфигурация приложения (роутинг, провайдеры)
    │   ├── App.jsx
    │   ├── routes.jsx
    ├── /pages      # Страницы (собирают features и entities)
    │   ├── HomePage.jsx
    │   ├── ProfilePage.jsx
    ├── /features   # Фичи (авторизация, поиск, корзина)
    │   ├── /auth
    │   │   ├── LoginForm.jsx
    │   │   ├── model.js  # Логика авторизации
    ├── /entities   # Бизнес-логика (пользователь, товары)
    │   ├── /user
    │   │   ├── UserCard.jsx
    │   │   ├── userModel.js
    ├── /shared     # Общие UI-компоненты (кнопки, инпуты, утилиты)
    │   ├── Button.jsx
    │   ├── Input.jsx
        `}</code>
        </pre>
      </div>
      <div className="content-text">
        <ol>
          <li>app – отвечает за настройку проекта (роутинг, провайдеры).</li>
          <li>pages – собирает страницы из готовых фич.</li>
          <li>features – фичи приложения (авторизация, поиск, фильтры).</li>
          <li>бизнес-логика (пользователь, товары).</li>
          <li>
            shared – переиспользуемые компоненты (кнопки, формы, утилиты).
          </li>
        </ol>
      </div>
    </div>
  )
}

export default ProjectStructure
