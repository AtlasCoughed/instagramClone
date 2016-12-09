/**
 * Created by MikeTran on 11/15/16.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import SearchApp from './SearchApp.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';


const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 20,
    },
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});


const LandingPage = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Paper className="main-content" zDepth={0} style={{background: '#e1e3e4'}}>
            <div style={styles.container}>
                <h1>Tag You're It</h1>
            </div>

            <SearchApp />
        </Paper>
    </MuiThemeProvider>
);

export default LandingPage;
