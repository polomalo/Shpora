import React from 'react'

const Storages = () => {
  return (
    <div className="content-block">
      <h2 className="content-title">Storages</h2>
      <hr />
      <h3 className="content-title">Local Storage</h3>
      <div className="content-text">
        <p>
          <b>Local Storage</b> — это встроенная возможность браузера хранить
          данные на стороне клиента. Главное его отличие от обычных переменных в
          коде в том, что сохранённые данные остаются на устройстве даже после
          закрытия браузера. Это значит, что ты можешь, например, сохранить тему
          сайта, язык интерфейса или данные формы, чтобы при следующем посещении
          пользователь увидел уже нужные настройки.
        </p>
        <p>
          <b>Основные особенности:</b>
        </p>
        <ul>
          <li>
            <b>Постоянство:</b>Данные не удаляются при закрытии вкладки или
            браузера.
          </li>
          <li>
            <b>Формат "ключ-значение":</b>Каждое значение хранится под
            уникальным ключом.
          </li>
          <li>
            <b>Строковый формат:</b>Все данные сохраняются как строки, поэтому
            для хранения объектов или массивов приходится преобразовывать их в
            строку через JSON.stringify.
          </li>
        </ul>
      </div>
      <h3 className="content-title">Основные методы работы с Local Storage</h3>
      <div className="content-text">
        <p>
          Работа с Local Storage осуществляется через глобальный объект
          localStorage, который предоставляет несколько простых методов:
        </p>

        <ol>
          <li>
            <p>
              <b>Сохранение данных:</b>
            </p>
            <div className="content-code">
              <pre>
                <code>{`
localStorage.setItem('userName', 'Павел');
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>Получение данных:</b>
            </p>
            <div className="content-code">
              <pre>
                <code>{`
const userName = localStorage.getItem('userName');
console.log(userName); // Выведет: Павел
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>Удаление данных:</b>
            </p>
            <div className="content-code">
              <pre>
                <code>{`
localStorage.removeItem('userName');
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>Очистка всего хранилища:</b>
            </p>
            <div className="content-code">
              <pre>
                <code>{`
localStorage.clear();
        `}</code>
              </pre>
            </div>
          </li>
        </ol>
      </div>
      <h3 className="content-title">Session Storage</h3>
      <div className="content-text">
        <p>
          <b>Session Storage</b> — это встроенная возможность браузера хранить
          данные на стороне клиента, но с одним важным отличием от Local
          Storage: данные в Session Storage живут только в рамках текущей сессии
          браузера. Это значит, что как только ты закроешь вкладку или окно, все
          сохранённые данные автоматически удаляются.
        </p>
      </div>
      <h3 className="content-title">
        Основные методы работы с Session Storage
      </h3>
      <div className="content-text">
        <p>
          Работать с Session Storage очень просто. Он предоставляет тот же набор
          методов, что и Local Storage, только данные в нём живут пока открыта
          вкладка:
        </p>
        <ol>
          <li>
            <p>
              <b>Сохранение данных:</b>
            </p>
            <div className="content-code">
              <pre>
                <code>{`
sessionStorage.setItem('tempData', 'Временное значение');
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>Получение данных:</b>
            </p>
            <div className="content-code">
              <pre>
                <code>{`
const tempData = sessionStorage.getItem('tempData');
console.log(tempData); // Выведет: Временное значение
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>Удаление данных:</b>
            </p>
            <div className="content-code">
              <pre>
                <code>{`
sessionStorage.removeItem('tempData');
        `}</code>
              </pre>
            </div>
          </li>
          <li>
            <p>
              <b>Очистка всего хранилища:</b>
            </p>
            <div className="content-code">
              <pre>
                <code>{`
sessionStorage.clear();
        `}</code>
              </pre>
            </div>
          </li>
        </ol>
      </div>
      <h3 className="content-title">Cookies</h3>
      <div className="content-text">
        <p>
          <b>Cookies </b> — это небольшие текстовые файлы, которые веб-сервер
          отправляет браузеру. Браузер сохраняет их и при последующих запросах
          автоматически отправляет серверу. Это позволяет, например, отслеживать
          авторизацию пользователя, сохранять предпочтения или вести статистику
          посещений.
        </p>
      </div>
      <h3 className="content-title">
        Как управлять Cookies с помощью JavaScript
      </h3>
      <div className="content-text">
        <p>
          Работа с cookies немного отличается от работы с Local Storage или
          Session Storage, ведь у него нет специальных методов типа setItem или
          getItem. Вместо этого всё происходит через свойство document.cookie.
        </p>
        <p>
          <b>Установка Cookies</b>
        </p>
        <div className="content-code">
          <pre>
            <code>{`
// Устанавливаем cookie с именем "username" и значением "Павел"
// Задаём дату истечения срока действия cookie и путь, по которому оно действительно
document.cookie = "username=Павел; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
        `}</code>
          </pre>
        </div>
        <p>
          <b>Чтение Cookies</b>
        </p>
        <p>
          Для получения всех cookies достаточно вывести значение
          document.cookie. Это вернёт строку, где все cookies разделены точкой с
          запятой:
        </p>
        <div className="content-code">
          <pre>
            <code>{`
console.log(document.cookie);
// Может вывести: "username=Павел; theme=dark"
        `}</code>
          </pre>
        </div>
        <p>
          <b>Удаление Cookies</b>
        </p>
        <p>
          Удалить cookie можно, установив для него дату истечения в прошлом:
        </p>
        <div className="content-code">
          <pre>
            <code>{`
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        `}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Storages
