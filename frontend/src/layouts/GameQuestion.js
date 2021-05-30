import React, { useState, useEffect } from 'react';
import Question from '../components/Question';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

import CovidLogoWhite from '../images/logos/covid_white.png';
import KnowledgeLogoWhite from '../images/logos/knowledge_white.png';

function GameQuestion(props){
    const [questionData, setQuestionData] = useState(props.location.state);
    const [question, setQuestion] = useState({description: "Knowledge Rally", option: ['?', '?', '?', '?']});
    const [disabled, setDisabled] = useState(true);

    let categories = ['History', 'Science', 'Training', 'Sports', 'Geography'];
    let qNum = questionData.number;
    let qCat = questionData.category;
    let points = questionData.points;

    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:4000/api/get-specific/${qCat}`)
            .then(res =>
                res.json())
            .then(
                result => {
                    console.log(result.questions);
                    let rand = Math.floor(Math.random() * result.questions.length);  
                    setQuestion(result.questions[rand]);
                    setDisabled(false);
                },
                error => {
                    console.log(error.message);
                }
            );
      }, []);

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
                <Question number={qNum} category={qCat} question={question} disabled={disabled} points={points}/>
            </Grid>

            <Grid container item xs={12} style={{paddingTop:'2%'}} alignContent='flex-end'>
                <Grid item xs={12}>
                    <img style={{width:'10rem'}} src={CovidLogoWhite} alt='Logo'/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default GameQuestion
