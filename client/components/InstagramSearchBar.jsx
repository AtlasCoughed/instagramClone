import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';

class InstagramSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };

        this.QueryChange = this.QueryChange.bind(this);
        this.FormSubmit = this.FormSubmit.bind(this);
    }

    QueryChange(result){
        this.setState({ query: result.target.value });
    }

    FormSubmit(result){
        result.preventDefault();
        this.props.infoStore(this.state.query);
    }

    render(){
        return (
            <Paper zDepth={2} className="search-bar" style={{
                borderRadius: '8px',
                width: '50%',
                margin: '0 auto',
                border: '2px solid #FF9800',
                padding: '15px',

            }}>
                <form className="search-bar-form" onSubmit={this.FormSubmit}>
                    <TextField
                        className="event-field search-field-border search-field-text"
                        onChange={this.QueryChange}
                        value={this.state.query || ""}
                        placeholder="    #nofilter"
                        underlineShow={false}
                    />
                    <RaisedButton
                        label="Search Insta Tags"
                        labelPosition="before"
                        icon={<ActionSearch/>}

                    />
                </form>
            </Paper>
        );
    }
}

export default InstagramSearchBar;