import React from 'react';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';


const styles = {
    width: 213,
    marginBottom: 180,
    display: 'inline-block',
    float: 'left',
    
}

const divStyle = {
    paddingTop:10,
    display: 'inline-block',
    marginLeft: '135px'
}

const textStyle1={
    fontSize:13,
    textAlign:'left',
    paddingLeft:18,
    color: "#1da1f2",
    fontWeight: 550,
    cursor:'pointer'
}

const textStyle2= {
    fontSize: 10,
    textAlign: 'left',
    paddingLeft: 18,
    color:"#78889c"
}

const Trends = () => (
    <div style={divStyle}>
        <Paper style={styles}>
            <Subheader style={{ color: "black", fontFamily: "Helvetica" }}><b>Trends for you </b>  · 
                <span style={{ color: "#1c94e0", fontSize: 9, cursor: 'pointer' }}> &nbsp;&nbsp;<a>Change</a></span>
            </Subheader>
            <div style={textStyle1}><a>#HPDF</a></div>
            <div style={textStyle2}>12.1K Tweets</div>
            <br />
                <div style={textStyle1}><a>#HasuraCLI</a></div>
            <div style={textStyle2}>15K Tweets</div>
            <br />
            <div style={textStyle1}><a>#earthquake</a></div>
            <div style={textStyle2}>10K Tweets</div>
            <br />
            <div style={textStyle1}><a>#INDvBEL</a></div>
            <div style={textStyle2}>4908 Tweets</div>
            <br />
            <div style={textStyle1}><a>#Virushka</a></div>
            <div style={textStyle2}>9K Tweets</div>
            <br />
            <div style={textStyle1}><a>#MustHaveDevTools</a></div>
            <div style={textStyle2}>14K Tweets</div>
            <br />
            <div style={textStyle1}><a>#FitToFIghtAwards</a></div>
            <div style={textStyle2}>5104 Tweets</div>
            <br />
        </Paper>
    </div>
);

export default Trends;