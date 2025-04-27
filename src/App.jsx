import './App.css'
import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx'
import Content from './components/Content.jsx'
import { ActiveContext } from './contexts/ActiveContext'

function App() {
  const [activeId, setActiveId] = useState('home')
  return (
    <ActiveContext.Provider value={{ activeId, setActiveId }}>
      <section className="app-container">
        <header className="app-header">
          <Header />
        </header>
        <main className="app-main">
          <Grid container spacing={2} height={'100%'}>
            <Grid size={3} className="app-nav" height={'100%'}>
              <Navigation />
            </Grid>
            <Grid size={9} height={'100%'}>
              <div className="app-main-content">
                <Content />
              </div>
            </Grid>
          </Grid>
        </main>
      </section>
    </ActiveContext.Provider>
  )
}

export default App
