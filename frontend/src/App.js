import React, { useState } from 'react';
import { Switch, Route, Redirect, useLocation} from 'react-router-dom';

import GameQuestion from './layouts/GameQuestion';
import Menu from './layouts/Menu';
import QuestionResult from './layouts/QuestionResult';

function App() {
  const [ isAuth, setIsAuth ] = useState(true);
  let location = useLocation();

  return (
    <Switch>
        { isAuth? <>
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/game" component={GameQuestion}/>
          <Route exact path="/result" component={QuestionResult}/>
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
