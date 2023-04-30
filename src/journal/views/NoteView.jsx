import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components'

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>28 de agosto, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sc={{}}>
                <SaveOutlined sx ={{fontSize:30,mr:1}}/>
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder='Ingrese un titulo'
                label ='Titulo'
                sx={{border:'none'.mb}}
            />
             <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='Que sucedio en el dia de hoy?'
                label ='Titulo'
                minRows={5}
                
            />
            <ImageGallery/>

        </Grid>
    </Grid>
  )
}
