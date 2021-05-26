import React from 'react';

function Question(props){
    return (
        <div>
            <h3>Question {props.number}</h3>
            <h4>{props.question}</h4>
            <form>
                <ul>
                    <li>
                        <input name="answer" type="radio" value="true"></input>
                        <label>Scatman</label>
                    </li>
                    <li>
                        <input name="answer" type="radio" value="false"></input>
                        <label>Sctman</label>
                    </li>
                    <li>
                        <input name="answer" type="radio" value="false"></input>
                        <label>Catman</label>
                    </li>
                    <li>
                        <input name="answer" type="radio" value="false"></input>
                        <label>Satman</label>
                    </li>
                </ul>
                <p>Bet points: <input name="bet" type="radio" value="0"></input>0<input name="bet" type="radio" value="1"></input>1<input name="bet" type="radio" value="2"></input>2</p>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Question
