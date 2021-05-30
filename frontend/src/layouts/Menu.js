import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import CovidLogoWhite from '../images/logos/covid_white.png';
import KnowledgeLogoWhite from '../images/logos/knowledge_white.png';

function Menu(props) {
    const { url } = useRouteMatch();
    console.log(props);

    return (
        <Grid container spacing={5} align='center'>
            <Grid container item xs={12} style={{padding:'5%'}} alignItems='center'>
                <Grid item xs={12}>
                    <img style={{width:'40rem'}} src={KnowledgeLogoWhite} alt='Logo'/>
                </Grid>
            </Grid>
            <Grid container style={{height:'50vh'}} item xs={12}>
                <Grid item xs={12} style={{padding:'2%'}}>
                    <Link to={{pathname: "game", state: {number: 1, category: 0, points: 456}}} style={{ textDecoration: 'none' }}>
                        <Button 
                            variant="contained" 
                            color="primary"
                            size="large"
                            style={{
                                color:'black',
                                backgroundColor: 'white'
                            }}
                        >
                            Play Match
                        </Button>
                    </Link>
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
