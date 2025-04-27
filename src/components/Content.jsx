import React from 'react'
import { Routes, Route } from 'react-router'
import ReactInfo from '../pages/ReactInfo'
import Beginning from '../pages/Beginning'
import ProjectStructure from '../pages/ProjectStructure'
import VirtualDOM from '../pages/VirtualDOM'
import Components from '../pages/Components'
import Props from '../pages/Props'
import State from '../pages/State'
import LifeCycle from '../pages/LifeCycle'
import Events from '../pages/Events'
import Refs from '../pages/Refs'
import Context from '../pages/Context'
import Routers from '../pages/Routers'
import Form from '../pages/Form'
import Storages from '../pages/Storages'
import Hoc from '../pages/Hoc'
import Home from '../pages/Home'

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/reactInfo" element={<ReactInfo />} />
      <Route path="/beginning" element={<Beginning />} />
      <Route path="/projectStructure" element={<ProjectStructure />} />
      <Route path="/virtualDOM" element={<VirtualDOM />} />
      <Route path="/components" element={<Components />} />
      <Route path="/props" element={<Props />} />
      <Route path="/state" element={<State />} />
      <Route path="/lifeCycle" element={<LifeCycle />} />
      <Route path="/events" element={<Events />} />
      <Route path="/refs" element={<Refs />} />
      <Route path="/context" element={<Context />} />
      <Route path="/router" element={<Routers />} />
      <Route path="/form" element={<Form />} />
      <Route path="/storages" element={<Storages />} />
      <Route path="/hoc" element={<Hoc />} />
    </Routes>
  )
}

export default Content
