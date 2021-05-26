import React, { useState } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import GameQuestion from './layouts/GameQuestion';
import Menu from './layouts/Menu'

function App() {
  const [ isAuth, setIsAuth ] = useState(true)
  return (
    <Switch>
        { isAuth? <>
          <Route exact path="/menu">
            <Menu/>
          </Route>
          <Route exact path="/game">
            <GameQuestion/>
          </Route>
          <Route exact path="/">
            <Redirect to="/menu"/>
          </Route>
        </>: 
          <Route exact path="/">
            <h1>Loggeo</h1>
          </Route>}
    </Switch>
  );
}

export default App;
