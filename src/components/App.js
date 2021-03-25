import React from 'react';
import MCQ from './MCQ';
import Blogs from './Blogs';
import Library from './Library';
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    navbar: {
        position: 'absolute'
    }
}));



const App = () => {
    const classes = useStyles();
    return (
        <Router>
            <Navbar className={classes.navbar} />
            <Switch>
                <Route exact path='/'>
                    <MCQ />
                </Route>
                <Route exact path='/MCQ'>
                    <MCQ />
                </Route>
                <Route exact path="/Blogs">
                    <Blogs />
                </Route>
                <Route exact path='/Library'>
                    <Library />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;