import React from 'react';
import Paper from 'material-ui/Paper';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import IconButton from 'material-ui/IconButton';

const style={
    height: 105,
    width: 250,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    float:'right',
    marginTop:300,
    marginLeft: '890px',
    position:'absolute'
}

const textStyle={
    fontSize: '12px',
    textAlign:'left',
    paddingLeft:12,
    color: "#78889c"
}

const Footer = () => (

        <Paper style={style} zDepth={1} >
        <p style={textStyle}>
        © 2017 Twitter <a>About</a> <a>Help Center</a> 
        <a>Terms</a> <a>Privacy policy</a> <a>Cookies</a> <a>Ads info</a> 
        <a>Brand</a> <a>Blog</a> <a>Status</a> <a>Apps</a> <a>Jobs</a> 
        <a>Marketing</a> <a>Businesses</a> <a>Developers</a> 
        </p>
        
        <IconButton className="floatingButton"
            backgroundColor='#293C8E'
            tooltip="Advertise with Twitter"
            tooltipPosition="top-center"
             style={{
                 width: 10,
                 height: 10,
                marginTop:-19,
                paddingRight:20,
                float: 'left'
                     }}>
            <OpenInNew color={'#1DA1F2'} viewBox="0 0 40 20"  />
        </IconButton> 
        <p style={{
            fontSize: '12px',
            textAlign: 'left',
            marginLeft: 29,
            color: "#1da1f2",
                }}>
            <a>Advertise with Twitter</a></p>
        </Paper>

);

export default Footer;
