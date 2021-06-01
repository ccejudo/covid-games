import React, { useState, useEffect } from 'react';
import { Grid, Button, Avatar, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Leaderboard() {
    const [ users, setUsers ] = useState([]);
    const [ global, setGlobal ] = useState(true);
    const [ isLoading, setLoading] = useState(false);
    const history = useHistory();
    const room = 2004

    const handleSwitch = () => { setGlobal(!global) }

    const renderList = () => {
        return users.map( user => {
            return(
                <ListItem key={user._id}>
                        <ListItemAvatar style={{padding:'2%', width:'5%'}}>
                            <Avatar
                                style={{width:'3rem', height:'3rem'}}
                                alt= 'User Avatar'
                                src= { user.avatar }
                            />
                        </ListItemAvatar>
                        <ListItemText style={{ width:'43%' }}>
                            <b>{user.username}</b>
                        </ListItemText>
                        <ListItemText style={{ width:'26%' }}>
                            <b>{user.score}</b>
                        </ListItemText>
                        <ListItemText style={{ width:'26%' }}>
                            <b>{user.room}</b>
                        </ListItemText>
                </ListItem>
            )
        })
    }

    function returnMenu(){
        history.push({
            pathname: '/menu'
        });
    }

    useEffect( () => {
        setLoading(true)

        if(global){ 
            axios.get(`http://localhost:4000/api/get-scores`)
            .then( res => {
                setUsers(res.data.users)
            })
            .catch( err => {
                console.error(err)
            })
            .finally( () => {
                setLoading(false)
            })
        } else {
            axios.post(`http://localhost:4000/api/get-scores`, { room: room })
            .then( res => {
                setUsers(res.data.users)
            })
            .catch( err => {
                console.error(err)
            })
            .finally( () => {
                setLoading(false)
            })
        }
    }, [ global ]);

    return (
        <Grid container spacing={5} align="center">
            <Grid item xs={12}>
                <h1 style={{color: 'white', fontSize:'3rem'}}>Leaderboard {global? "Global" : room}</h1>
                <Button 
                variant="contained" 
                color="primary" 
                size="large"
                style={{
                    color:'black',
                    backgroundColor: 'white'
                }}
                onClick={ handleSwitch }
            >
                Switch to {global? "Room" : "Global"}
            </Button>
            </Grid>
            <hr style={{width: '80%'}}/>
            <Grid item xs={12}>
                <div style={{width: '80%', display: 'flex'}}>
                    <div style={{width: '33%', textAlign: 'center'}}>
                        <h3 style={{margin:'0%'}}>Username</h3>
                    </div>
                    <div style={{width: '33%', textAlign: 'center'}}>
                        <h3 style={{margin:'0%'}}>Score</h3>
                    </div>
                    <div style={{width: '33%', textAlign: 'center'}}>
                        <h3 style={{margin:'0%'}}>Room</h3>
                    </div>
                </div>
            </Grid>
            <hr style={{width: '80%'}}/>
            <Grid item xs={12}>
                <List style={{width:'80%', height:'50vh', overflow: 'scroll', }}>
                    { !isLoading && users
                        ? renderList()
                        : null
                    }
                </List>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={returnMenu}
                    style={{
                        color:'black',
                        backgroundColor: 'white'
                    }}>
                        Return to Menu
                </Button>
            </Grid>
        </Grid>
    )
}

export default Leaderboard
