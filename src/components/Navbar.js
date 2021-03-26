import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import NoteAddRoundedIcon from '@material-ui/icons/NoteAddRounded';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { pink, purple, yellow } from '@material-ui/core/colors'
import Box from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    navbar: {
        backgroundColor: '#f50057',
    },
    tabColor: {
        color: '#fce4ec',
        '&:hover': {
            color: '#ffff00',
            opacity: 1,
        }, '&:focus': {
            color: '#ffff00',
        }
    },

}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f50057'
        },
        secondary: yellow
    }
})

const Navbar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const matches = useMediaQuery('(max-width:600px)');
    const labels = [
        {
            key: '1',
            icon: <NoteAddRoundedIcon />,
            label: 'MCQ',
            link: '/MCQ'
        },
        {
            key: '2',
            icon: <LibraryBooksRoundedIcon />,
            label: 'LIBRARY',
            link: '/Library'
        },
        {
            key: '3',
            icon: <LibraryBooksRoundedIcon />,
            label: 'BLOGS',
            link: '/Blogs'
        }
    ]
    const returnTab = labels.map(({ icon, label, key, link }) => {
        return (
            <Tab
                icon={icon}
                label={label}
                key={key}
                component={Link}
                to={link}
                className={classes.tabColor}
            />
        );
    });
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box boxShadow={1}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Paper>
                        <Grid container>
                            <Grid item xs={7} md={9} lg={9}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    variant="fullWidth"
                                    indicatorColor="secondary"
                                    textColor="secondary"
                                    aria-label="icon label tabs example"
                                    className={classes.navbar}
                                >
                                    {returnTab}
                                </Tabs>
                            </Grid>
                            <Grid item xs={4} md={2} lg={2} container direction="row" justify="center" alignItems="center">
                                <ButtonGroup variant="text"
                                    color="primary"
                                    aria-label="text primary button group"
                                    fullWidth={true}
                                    className={classes.loginSignupBtn}
                                >
                                    <Button>Login</Button>
                                    <Button>SignUp</Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item xs={1} md={1} lg={1} container direction="row" justify="center" alignItems="center">
                                <div className={classes.avatar}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                        className={matches ? classes.small : classes.large}
                                        onClick={(e) => {
                                            console.log(e);
                                        }}
                                    />

                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </ThemeProvider>
            </Box>
        </div >
    );
}
export default Navbar;