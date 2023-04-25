import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { PurpleTheme } from './purpleTheme'

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme ={PurpleTheme}>
 
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
