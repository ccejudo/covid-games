import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import CovidLogoWhite from '../images/logos/covid_white.png';
import KnowledgeLogoWhite from '../images/logos/knowledge_white.png';

function QuestionResult(props){
    const [questionData, setQuestionData] = useState(props.location.state);
    let qNum = questionData.number+1;
    let qCat = questionData.category+1;
    let points = questionData.points;
    let correct = questionData.correct;
    let ans = questionData.ans;
    let diff = questionData.diff;

    console.log(correct)

    const history = useHistory();

    const updateScore = () => {
        axios.post( 'http://localhost:4000/api/update-score', {score: points} )
            .catch(err => {
                console.error(err);
            })
    }

    function returnMenu(){
        history.push({
            pathname: '/menu'
        });
    }

    return (
        <Grid container spacing={3} align='center'>
            <Grid  item xs={12} style={{paddingTop:'3%'}}>
                <Grid item xs={12}>
                    <img style={{width:'40rem'}} src={KnowledgeLogoWhite} alt='Logo'/>
                </Grid>
            </Grid>

            <Grid container item xs={12} alignItems="center">
                <Grid item xs={4} style={{color:'white'}}>
                    <h1>SHOWTIME</h1>
                </Grid>
                <Grid item xs={4} style={{color:'white'}}>
                    <h2>Current Points: <label>{points}</label></h2>
                </Grid>
                <Grid item xs={4} style={{color:'white'}}>
                    <Button variant="contained" color="primary" onClick={returnMenu}
                            style={{
                                color:'black',
                                backgroundColor: 'white'
                            }}>
                                Return to Menu
                    </Button>
                    
                </Grid>
                <Grid item xs={12} style={{color:'white'}}>
                    <hr></hr>
                    { correct ?
                    (<h1>CORRECT!</h1>)
                    :
                    (<h1>THAT AIN'T IT CHIEF!</h1>)
                    }
                </Grid>
                <Grid item xs={6} style={{color:'white'}}>
                    <h2>Right Answer: {ans}</h2>
                </Grid>
                <Grid item xs={6} style={{color:'white'}}>
                    { correct ?
                    (<h2>Points Won: {diff} </h2>)
                    :
                    (<h2>Points Lost: {diff} </h2>)
                    }
                </Grid>
                <Grid item xs={12} style={{color:'white'}}>
                    { qNum == 6 ?
                        (<h2>Final Points: {points} </h2>)
                        : (<></>)
                    }
                </Grid>
                <Grid item xs={12} style={{padding:'2%'}}>
                    {
                        qNum < 6 ?
                        (<Link to={{pathname: "game", state: {number: qNum, category: qCat, points: points}}} style={{ textDecoration: 'none' }}>
                            <Button 
                                variant="contained" 
                                color="primary"
                                size="large"
                                style={{
                                    color:'black',
                                    backgroundColor: 'white'
                                }}
                            >
                                Next Question
                            </Button>
                        </Link>)
                        :
                        (<Link to={{pathname: "menu"}} style={{ textDecoration: 'none' }}>
                            <Button 
                                variant="contained" 
                                color="primary"
                                size="large"
                                style={{
                                    color:'black',
                                    backgroundColor: 'white'
                                }}
                                onClick={ updateScore }
                            >
                                Finish Game
                            </Button>
                        </Link>)
                    }
                    
                </Grid>
            </Grid>

            <Grid container item xs={12} style={{paddingTop:'2%'}} alignContent='flex-end'>
                <Grid item xs={12}>
                    <img style={{width:'10rem'}} src={CovidLogoWhite} alt='Logo'/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default QuestionResult