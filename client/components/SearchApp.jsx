/**
 * Created by MikeTran on 11/15/16.
 */
import React from 'react';
import axios from 'axios';
import InstagramSearchBar from './InstagramSearchBar.jsx';
import InstagramSearchResults from './InstagramSearchResults.jsx';
import {  Glyphicon } from 'react-bootstrap';


class SearchApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery: 'nofilter',
            isLoading: '',
            result: [],
            searchError: '',
        };
        this.handleAPISearch = this.handleAPISearch.bind(this);
        this.infoStore = this.infoStore.bind(this);
    }

    componentWillMount(){
        if(this.state.searchQuery){
            this.handleAPISearch(this.state.searchQuery);
            this.setState({searchQuery: ''});
        }
    }

    infoStore(query) {
        this.setState({query: query});
        this.handleAPISearch(query);
    }

    handleAPISearch(query){
        var that = this;
        this.setState({isLoading: true});
        axios.post('/api/search/Instagram', {
            query: query
        })
        .then(function(response) {
            const responseResults =[];
            for( const posts of response.data){
                if( posts.length > 0){
                    responseResults.push(posts)
                }
            }
            that.setState({
                result: response.data,
                isLoading: false
            });
            return;
        })
        .catch(function(error) {
            console.log("handleAPISearch ERROR: " , error);
            this.setState({isLoading: 'error'})
        });
    };


    render(){
        if(this.state.isLoading){
            return (
                <div>
                    <InstagramSearchBar
                        infoStore={this.infoStore}
                    />
                    <br></br>
                    <br></br>
                    <div>
                        <img className="spinner" src="../spinner.gif"/>
                    </div>
                </div>
            )
        } else if (this.state.isLoading === "error"){
            location.href = location.origin + "/404";
        } else {
            return (
                <div>
                    <div>
                        <InstagramSearchBar
                            infoStore={this.infoStore}
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <InstagramSearchResults
                            results={this.state.result}
                        />
                    </div>
                </div>
            );
        }
    };
}

export default SearchApp;