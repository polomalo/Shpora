import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h2>Current count: {count}</h2>
      <Button
        sx={{ background: '#a8dce7', color: '#101422' }}
        variant="contained"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </Button>
    </>
  )
}

export default Counter
