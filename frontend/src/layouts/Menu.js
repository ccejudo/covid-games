import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { useRouteMatch } from 'react-router-dom'

import CovidLogoWhite from '../images/logos/covid_white.png';
import KnowledgeLogoWhite from '../images/logos/knowledge_white.png';

function Menu() {
    const { url } = useRouteMatch();

    return (
        <Grid container  spacing={5} align='center'>
            <Grid content item xs={12} style={{padding:'5%'}} alignItems='center'>
                <Grid item xs={12}>
                    <img style={{width:'40rem'}} src={KnowledgeLogoWhite} alt='Logo'/>
                </Grid>
            </Grid>
            <Grid container style={{height:'50vh'}} item xs={12}>
                <Grid item xs={12} style={{padding:'2%'}}>
                    <Button 
                        variant="contained" 
                        color="primary"
                        size="large"
                        style={{
                            color:'black',
                            backgroundColor: 'white'
                        }}
                        onClick={() => window.location.href = url+'/game'}
                    >
                        Join Game
                    </Button>
                </Grid>
                <Grid item xs={12} style={{padding:'2%'}}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="large"
                        style={{
                            color:'black',
                            backgroundColor: 'white'
                        }}
                    >
                        Leaderboard
                    </Button>
                </Grid>
            </Grid>

            <Grid container item xs={12} alignContent='flex-end'>
                <Grid item xs={12}>
                    <img style={{width:'10rem'}} src={CovidLogoWhite} alt='Logo'/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Menu
