import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CovidLogoWhite from '../images/logos/covid_white.png';
import KnowledgeLogoWhite from '../images/logos/knowledge_white.png';

function Menu(props) {
    const [ user, setUser ] = useState();
    const [ isLoading, setIsLoading ] = useState(false);
    const { logout } = useAuth0();

    const handleLogout = () => logout();

    useEffect( () => {
        setIsLoading(true);

        axios.post('http://localhost:4000/api/get-user', { username : 'chickenriceandbeans' })
            .then( res => {
                setUser(res.data.user[0]);
                console.log(user);
            })
            .catch( err => {
                console.error( err );
            })
            .finally( () => {
                setIsLoading(false);
            })
    }, []);

    return (
        <Grid container spacing={5} align='center'>
            <Grid container item xs={12} style={{padding:'5%'}} alignItems='center'>
                <Grid item xs={12}>
                    <img style={{width:'40rem'}} src={KnowledgeLogoWhite} alt='Logo'/>
                </Grid>
            </Grid>
            { !isLoading && user
             ? <Grid container style={{height:'50vh'}} item xs={12}>
                    <Grid item xs={12} style={{padding:'2%'}}>
                        <Link to={{pathname: "game", state: {number: 1, category: 0, points: user.score}}} style={{ textDecoration: 'none' }}>
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
                        <Link to={{pathname: "leaderboard"}} style={{ textDecoration: 'none' }}>
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
                            onClick={handleLogout}
                        >
                            Log Out
                        </Button>
                    </Grid>
                </Grid>

                : null
            }

            <Grid container item xs={12} alignContent='flex-end'>
                <Grid item xs={12}>
                    <img style={{width:'10rem'}} src={CovidLogoWhite} alt='Logo'/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Menu
