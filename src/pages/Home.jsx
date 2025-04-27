import React, { useContext, useEffect } from 'react'
import ReactReduxRTK from '../images/ReactReduxRTK.webp'
import { ActiveContext } from '../contexts/ActiveContext'

const Home = () => {
  const { setActiveId } = useContext(ActiveContext)

  useEffect(() => {
    setActiveId('home')
  }, [setActiveId])
  return (
    <div className="content-block">
      <h2 className="content-title">Roadmap</h2>
      <hr />
      <div className="content-img">
        <img src={ReactReduxRTK} alt="" />
      </div>
    </div>
  )
}

export default Home
