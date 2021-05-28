import React, { useState, useEffect } from 'react';
import { Grid, Button, Radio, FormControl, FormLabel, Box,
    RadioGroup, FormControlLabel, FormHelperText } from '@material-ui/core';
import { useHistory } from "react-router-dom";

function Question(props){
    const [ansValue, setAnsValue] = useState(null);
    const [betValue, setBetValue] = useState(null);
    const [ansError, setAnsError] = useState(false);
    const [helperText, setHelper] = useState('Choose wisely');
    const [helperText2, setHelper2] = useState('The higher the risk, the higher the reward');

    let categories = ['History', 'Science', 'Training', 'Sports', 'Geography'];

    const history = useHistory();

    const handleAnswerChange = (event) => {
        setAnsValue(event.target.value);
        setHelper('Choose wisely');
        setAnsError(false);
    };

    const handleBetChange = (event) => {
        setBetValue(event.target.value);
        setHelper2('The higher the risk, the higher the reward');
        setAnsError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(ansValue == null){
            setHelper('Please select an option.');
            setAnsError(true);
        }
        else if(betValue == null){
            setHelper2('Please select an option.');
            setAnsError(true);
            
        }
        else{
            console.log(ansValue);
            console.log(betValue);
            if(ansValue==props.question.answer){
                console.log("Nice");
            }
            else{
                console.log("Loser");
            }
            history.push({
                pathname: '/result',
                state: {number: props.number, category: props.category}
            });
        }
      };

    return (
        <Grid item xs={12}>
            <Grid item xs={12} style={{color:'white'}}>
                <hr></hr>
                <h2>Question {props.number} : {categories[props.category]}</h2>
            </Grid>
            <form onSubmit={handleSubmit}>
                <Grid item xs={6} style={{border:'1px'}} >
                    <Box border={1} borderColor="white">
                        <FormControl error={ansError} component="fieldset">
                        <h3 style={{color:'white'}}>{props.question.description}</h3>
                            <RadioGroup aria-label="answer" name="question" value={ansValue} onChange={handleAnswerChange}>
                                <FormControlLabel style={{color: 'white', borderRadius: 3}} value="0" control={<Radio style={{color: 'green'}} />} label={props.question.option[0]}/>
                                <FormControlLabel style={{color: 'white', borderRadius: 3}} value="1" control={<Radio style={{color: 'green'}} />} label={props.question.option[1]}/>
                                <FormControlLabel style={{color: 'white', borderRadius: 3}} value="2" control={<Radio style={{color: 'green'}} />} label={props.question.option[2]}/>
                                <FormControlLabel style={{color: 'white', borderRadius: 3}} value="3" control={<Radio style={{color: 'green'}} />} label={props.question.option[3]}/>
                            </RadioGroup>
                            <FormHelperText style={{color:'white'}}>{helperText}</FormHelperText>
                            <br></br>
                            {
                                props.disabled ?
                                (<></>)
                                :
                                (
                                <RadioGroup row aria-label="bet" name="bets" value={betValue} onChange={handleBetChange}>
                                    <FormControlLabel value="0" style={{color: 'white'}} control={<Radio style={{color: 'green'}} />} label="Bet 0 points" />
                                    <FormControlLabel value="1" style={{color: 'white'}} control={<Radio style={{color: 'green'}} />} label="Bet 1 point" />
                                    <FormControlLabel value="2" style={{color: 'white'}} control={<Radio style={{color: 'green'}} />} label="Bet 2 points" />
                                </RadioGroup>
                            )
                            }
                            <FormHelperText style={{color:'white'}}>{helperText2}</FormHelperText>
                            <br></br>
                            <Button type="submit" variant="contained" style={{color: 'black', background: 'white'}} disabled={props.disabled}>
                                Check Answer
                            </Button>
                            <br></br>
                        </FormControl>
                    </Box>
                </Grid>
            </form>
        </Grid>
    )
}

export default Question
