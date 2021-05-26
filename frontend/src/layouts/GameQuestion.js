import React from 'react';
import Question from '../components/Question';

function GameQuestion(){
    return (
        <div className="App">
            <h1>SHOWTIME</h1>
            <br/>
            <h2>Current Points: <label>500</label></h2>
            <Question number={1} question={"Who is the scatman?"}/>
        </div>
    )
}

export default GameQuestion
