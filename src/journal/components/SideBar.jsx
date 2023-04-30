import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = ({drawerWidth=240}) => {
  return (
    <Box component='nav'
        sx={{'width':{sm:drawerWidth}, flexShrink:{sm:0}}}>
        <Drawer variant='permanent' //Temporary
            open
            sx={{display:{xs:'block'},
        '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}}}
        >
        <Toolbar>
            <Typography variant='h6'noWrap component='div'>
                Santiago Moreno
            </Typography>
        </Toolbar>
        <Divider/>
        <List>
            {
                ['Enero','Febrero','Marzo','Abril'].map(text=>(
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot/>
                            </ListItemIcon>
                            <Grid >
                                <ListItemText primary={text}/>
                                <ListItemText secondary={'Nulla eu culpa amet culpa culpa sunt aute commodo sint commodo ex duis minim ullamco.'}/>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
        </Drawer>
    </Box>
  )
}
