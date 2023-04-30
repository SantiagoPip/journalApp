import { AddOutlined, MailOutline } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { NoteView } from '../views'
const drawerWidth = 240
export const JournalPage = () => {
  return (
    <>
    <JournalLayout>
      <NothingSelectedView/>   
      <IconButton
      size='large'
      sx={{
        color:'white',
        background:'error.main',
        ':hover':{backgroundColor:'error.main',opacity:0.9},
        position:'fixed',
        right:50,
        bottom:50
      }}>
        <AddOutlined sx = {{fontSize:30}}/>
          </IconButton> 
      {/* <NoteView/> */}
    </JournalLayout>
    </>
  )
}
