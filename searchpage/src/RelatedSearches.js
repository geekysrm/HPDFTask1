import React from 'react';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';


const styles = {
    width: 213,
    marginBottom: 170,
    display: 'inline-block',
    float: 'left',
    position:'absolute'
    
}
const styles1 = {
    width: 213,
    marginBottom: 180,
    display: 'inline-block',
    float: 'left',
    height:45,
    position: 'absolute'

}

const divStyle = {
    paddingTop:10,
    display: 'inline-block',
    marginLeft: '145px',
    position: 'absolute'
}

const textStyle1={
    fontSize:13,
    textAlign:'left',
    paddingLeft:18,
    color: "#1da1f2",
    fontWeight: 550,
    cursor:'pointer',
    paddingBottom:10
}



const RelatedSearches = () => (
    <div style={divStyle}>
       
        <Paper style={styles1}>
            <Subheader style={{ color: "black", fontFamily: "Helvetica" }}><b>Search filters </b>   · 
                <span style={{ color: "#1c94e0", fontSize: 9, cursor: 'pointer' }}> &nbsp;&nbsp;<a>Show</a></span>

            </Subheader>
            
            <Paper style={styles}>
                <Subheader style={{ color: "black", fontFamily: "Helvetica" }}><b>Related searches </b>
                </Subheader>
                <div style={textStyle1}><a>kapil sibal</a></div>

                <div style={textStyle1}><a>bombay high court</a></div>

                <div style={textStyle1}><a>#aadhaar</a></div>

                <div style={textStyle1}><a>kashmir</a></div>

                <div style={textStyle1}><a>#chaupal</a></div>



            </Paper>
        </Paper>
      

    </div>
);

export default RelatedSearches;