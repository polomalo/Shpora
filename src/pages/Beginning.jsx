import React from 'react'
import nodeSetup from '../images/nodeSetup.webp'

const Beginning = () => {
  return (
    <div className="content-block">
      <h2 className="content-title">С чего начать?</h2>
      <hr />
      <div className="content-text">
        <p>
          Вот пошаговая инструкция для создания первого приложения на React:
        </p>
      </div>
      <div className="content-text">
        <ol>
          <li>
            <p>
              Установи Node.js на свой компьютер. Ты можешь скачать установочный
              файл с официального сайта Node.js. (надо будет перезагрузить
              компьютер если это windows)
            </p>
          </li>
          <li>
            <p>
              Проверь установлен ли Node.js и NPM Открой консоль (терминал) и
              введи в консоли команду node -v и npm -v
            </p>
            <div className="content-img">
              <img src={nodeSetup} alt="" />
            </div>
            <p>
              Выполни команду npm init vite@latest. Эта команда создаст новый
              проект на React в папке vite-project (или любой другой, которую ты
              введешь сам).
            </p>
          </li>
          <li>
            <p>
              Следующий шаг это установить vite. Это современный способ начать
              писать на react.
            </p>
          </li>
          <li>
            <p>
              После этой команды, в текущей директории (папке) появится проект
              (это тоже папка) с тем названием, что было задано.
            </p>
          </li>
          <li>
            <p>
              Теперь ты можешь запустить проект. Перейди в консоли в нужную
              директорию cd vite-project
            </p>
          </li>
          <li>
            <p>Установи нужные пакеты для работы в проекте npm i</p>
          </li>
          <li>
            <p>Запусти проект командой npm run dev</p>
          </li>
          <li>
            <p>
              Открой браузер и перейди по адресу http://localhost:5173/, чтобы
              увидеть приложение на React!
            </p>
          </li>
          <li>
            <p>
              Теперь ты можешь начать изменять приложение, редактируя файлы в
              папке src. Каждый раз, когда ты сохраняешь изменения, приложение
              автоматически перезагружается в браузере.
            </p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Beginning
