import React from 'react';
import Create from './Create';
import MCQ from './MCQ';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Create />
                </Route>
                <Route exact path='/MCQ'>
                    <MCQ />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;