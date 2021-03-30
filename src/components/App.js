import React from 'react';
import MCQ from './MCQ';
import BlogsMain from './BlogsMain';
import Library from './Library';
import Navbar from './Navbar';
import SignUp from './SignUp';
import CreateMCQ from './createMCQ';
import ViewAllMcq from './ViewAllMcq'
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

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
                    <Library />
                </Route>
                <Route exact path='/MCQ'>
                    <MCQ />
                </Route>
                <Route exact path='/MCQ/:routes'>
                    <MCQ />
                </Route>
                <Route exact path="/BlogsMain">
                    <BlogsMain />
                </Route>
                <Route exact path='/Library'>
                    <Library />
                </Route>
                <Route exact path='/SignUp'>
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;