import React from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ImageIcon from 'material-ui/svg-icons/image/image';


export default class TweetBox extends React.Component {

    render() {
        return (
            <Paper zDepth={1} style={{
                height: 40,
                width: 500,
                marginLeft: 22,
                marginTop: 15,
                display: 'inline-block',
                float: 'left',
                backgroundColor: '#e8f5fd'
            }}>
                <Avatar src="./mypic.jpg" size="30px" style={{ marginTop: 5, marginLeft: 7 }} />
                <input style={{float:'left',postion:'absolute',marginLeft: 43,marginTop:-33}} type="text" placeholder="What's happening?" />
                <input id="myInput" type="file" ref={(ref) => this.myInput = ref} style={{ display: 'none' }} /> 
                <IconButton 
                    style={{ float: 'right', marginRight: 4, marginTop: -45 }} 
                    className="floatingButton"
                    backgroundColor='#293C8E'
                    onClick={(e) => this.myInput.click()}>
                    <ImageIcon color={'#1DA1F2'} viewBox="0 0 40 20" style={{ float: 'right'}}/>
                </IconButton>  
            </Paper>
        );
    }
}