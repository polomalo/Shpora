import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import HomeFilledIcon from '@mui/icons-material/HomeFilled'
import { Link } from 'react-router'
import { ActiveContext } from '../contexts/ActiveContext'

const Header = () => {
  const { activeId, setActiveId } = useContext(ActiveContext)

  const handleHomeClick = () => {
    setActiveId('home')
  }
  return (
    <Grid
      container
      sx={{ height: '100%', borderColor: '#272b3b', borderBottom: '2px solid' }}
    >
      <Grid size={2} sx={{ textAlign: 'center', position: 'relative' }}>
        <Link to={`/home`}>
          <HomeFilledIcon
            fontSize="large"
            onClick={handleHomeClick}
            sx={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              width: '50px',
              height: '50px',
              color: activeId === 'home' ? '#a8dce7' : '#fff',
            }}
          />
        </Link>
      </Grid>
      <Grid
        size={10}
        sx={{ textAlign: 'center', color: '#fff', position: 'relative' }}
      >
        <h1>Теория по библиотеке React</h1>
      </Grid>
    </Grid>
  )
}

export default Header
