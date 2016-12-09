/**
 * Created by MikeTran on 11/15/16.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class ResultListEntry extends React.Component{
    constructor(props){
        super(props);

        this.handleUsernameClick = this.handleUsernameClick.bind(this);
        this.handlePictureClick = this.handlePictureClick.bind(this);
    }

    handlePictureClick(pictureLink){
        // "link": "https://www.instagram.com/p/BM16XxVhnqf/"
        if(this){
            window.location = this.props.result.link;
        }
    }

    handleUsernameClick(){
        // "username": "katanashiro",
        if(this){
            const userLink = this.props.result.caption.from.username;
            window.location = "https://www.instagram.com/" + userLink;
        }
    }

    render(){
        return (
        <Card>
            <CardHeader
                title={this.props.result.caption.from.username || ''}
                avatar={this.props.result.caption.from.profile_picture }
            />
            <CardMedia>
                <img src={this.props.result.images.standard_resolution.url}/>
            </CardMedia>
            <CardTitle
                title={this.props.result.likes.count + " likes"}
            />
            <CardText>
                {this.props.result.caption.text}
            </CardText>
            <CardActions>
                <FlatButton
                    label="Find User"
                    onClick={this.handleUsernameClick}
                />
                <FlatButton
                    label="Go to Image"
                    onClick={this.handlePictureClick}
                />
            </CardActions>
        </Card>
        );
    }
}

export default ResultListEntry;