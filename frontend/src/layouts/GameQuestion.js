import React, { useState, useEffect } from 'react';
import Question from '../components/Question';
import { Grid, Button } from '@material-ui/core';

import CovidLogoWhite from '../images/logos/covid_white.png';
import KnowledgeLogoWhite from '../images/logos/knowledge_white.png';

function GameQuestion(props){
    const [questionData, setQuestionData] = useState(props.location.state);
    const [question, setQuestion] = useState({description: "Knowledge Rally", option: ['?', '?', '?', '?']});
    const [disabled, setDisabled] = useState(true);
    let categories = ['History', 'Science', 'Training', 'Sports', 'Geography'];
    let qNum = questionData.number;
    let qCat = questionData.category;

    useEffect(() => {
        fetch("http://localhost:4000/api/get-questions")
            .then(res =>
                res.json())
            .then(
                result => {
                    console.log(result.questions);
                    setQuestion(result.questions[0]);
                    setDisabled(false);
                },
                error => {
                    console.log(error.message);
                }
            );
      }, []);

    return (
        <Grid container spacing={3} align='center'>
            <Grid  item xs={12} style={{paddingTop:'3%'}}>
                <Grid item xs={12}>
                    <img style={{width:'40rem'}} src={KnowledgeLogoWhite} alt='Logo'/>
                </Grid>
            </Grid>

            <Grid container item xs={12}>
                <Grid item xs={6} style={{color:'white'}}>
                    <h1>SHOWTIME</h1>
                </Grid>
                <Grid item xs={6} style={{color:'white'}}>
                    <h2>Current Points: <label>500</label></h2>
                </Grid>
                <Question number={qNum} category={qCat} question={question} disabled={disabled}/>
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
