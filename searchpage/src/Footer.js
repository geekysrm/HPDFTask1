import React from 'react';
import Paper from 'material-ui/Paper';


const style={
    height: 95,
    width: 200,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    float:'right',
    marginTop:670,
    marginLeft:'-210px',
    position:'absolute',
    backgroundColor:'transperent',
}
const textStyle={
    fontSize: '11px',
    textAlign:'left',
    paddingLeft:11,
    color: "#78889c"
}

const Footer = () => (

        <Paper style={style} zDepth={0} >
        <p style={textStyle}>© 2017 <a>Twitter</a> <a>About</a> <a>Help Center</a> 
        <a>Terms</a> <a>Privacy policy</a> <a>Cookies</a> <a>Ads info</a>  </p>
        </Paper>

);

export default Footer;
