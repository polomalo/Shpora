import { createContext } from 'react'

export const ActiveContext = createContext({
  activeId: null,
  setActiveId: () => {},
})
