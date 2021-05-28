import React, { useState, useEffect } from 'react';
import Question from '../components/Question';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CovidLogoWhite from '../images/logos/covid_white.png';
import KnowledgeLogoWhite from '../images/logos/knowledge_white.png';

function QuestionResult(props){
    const [questionData, setQuestionData] = useState(props.location.state);
    let qNum = questionData.number+1;
    let qCat = questionData.category+1;

    return (
        <Grid container spacing={3} align='center'>
            <Grid  item xs={12} style={{paddingTop:'3%'}}>
                <Grid item xs={12}>
                    <img style={{width:'40rem'}} src={KnowledgeLogoWhite} alt='Logo'/>
                </Grid>
            </Grid>

            <Grid container item xs={12}>
                <Grid item xs={12} style={{color:'white'}}>
                    <h1>CORRECT</h1>
                </Grid>
                <Grid item xs={12} style={{color:'white'}}>
                    <h2>Current Points: <label>500</label></h2>
                </Grid>
                <Grid item xs={12} style={{padding:'2%'}}>
                    <Link to={{pathname: "game", state: {number: qNum, category: qCat}}} style={{ textDecoration: 'none' }}>
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
                    </Link>
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