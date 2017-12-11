import React from 'react';
import TextField from 'material-ui/TextField';
import { blue500 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

    const style = {
        height: 30,
        width: 700,
        marginLeft: 28,
        marginTop: 15,
        textAlign: 'center',
        display: 'inline-block',
        float: 'left'
    };

const styles = {
        fontSize: 10,
        color: blue500,
        marginLeft:100,
        maxWidth:100
        
}
const style2={
    maxWidth:190,
    height:30
}

const Textbox = () => (
    <div >
        <Paper style={style} zDepth={1} rounded={true} >
        <TextField
            style={style2}
            underlineShow={false}
            multiLine="true"
            hintText="What's happening?"
            hintStyle={styles}
        />
        </Paper>
    </div>
);

export default Textbox;
