import React, { useContext } from 'react'
import { Link } from 'react-router'
import './NavStyles.css'
import classNames from 'classnames'
import { ActiveContext } from '../contexts/ActiveContext'

const Navigation = () => {
  const { activeId, setActiveId } = useContext(ActiveContext)
  const navLinks = [
    { id: 1, title: 'С чего начать?', link: 'beginning' },
    { id: 2, title: 'Реакт - это...', link: 'reactInfo' },
    { id: 3, title: 'Структура проекта', link: 'projectStructure' },
    { id: 4, title: 'Введение в VirtualDOM', link: 'virtualDOM' },
    { id: 5, title: 'Components', link: 'components' },
    { id: 6, title: 'Props', link: 'props' },
    { id: 7, title: 'State', link: 'state' },
    { id: 8, title: 'LifeCycle', link: 'lifeCycle' },
    { id: 9, title: 'Events и как работать с ними', link: 'events' },
    { id: 10, title: 'Refs, Fragment, key, React.memo', link: 'refs' },
    { id: 11, title: 'Context', link: 'context' },
    { id: 12, title: 'React Router V6', link: 'router' },
    { id: 13, title: 'React-hook-form VS formik', link: 'form' },
    { id: 14, title: 'STORAGEs', link: 'storages' },
    { id: 15, title: 'HOC', link: 'hoc' },
  ]
  return (
    <ul>
      {navLinks.map(({ id, title, link }) => (
        <Link
          key={id}
          to={`/${link}`}
          className={classNames('nav-link', activeId === id ? 'active' : '')}
          onClick={() => setActiveId(id)}
        >
          <li key={id}>{title}</li>
        </Link>
      ))}
    </ul>
  )
}

export default Navigation
