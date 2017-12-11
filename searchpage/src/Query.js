import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    height: 40,
    width: 1270,
    marginTop: 0.5,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor:'#1da1f2'
};

const Query = () => (
    <div>
        <Paper style={style} zDepth={1} >
        <span style={{color:'white',paddingLeft:134,marginTop:-7,float:'left'}}><h3>aadhaar</h3></span>
        </Paper>
           </div>
);

export default Query;