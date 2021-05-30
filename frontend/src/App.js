import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Backdrop, CircularProgress, Button } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom';

import GameQuestion from './layouts/GameQuestion';
import Menu from './layouts/Menu';
import QuestionResult from './layouts/QuestionResult';
import Leaderboard from './layouts/Leaderboard';

function App() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const handleRedirect = () => loginWithRedirect();

  return (
    <Switch>
        { isLoading 
          ? <Backdrop>
              <CircularProgress color="inherit" />
            </Backdrop>
          : isAuthenticated
          ?  <>
              <Route exact path="/menu" component={Menu}/>
              <Route exact path="/game" component={GameQuestion}/>
              <Route exact path="/result" component={QuestionResult}/>
              <Route exact path="/leaderboard" component={Leaderboard}/>
              <Route exact path="/">
                <Redirect to="/menu"/>
              </Route>
            </>
          : <Route exact path="/">
              {handleRedirect()}
            </Route>
        }
    </Switch>
  );
}

export default App;
