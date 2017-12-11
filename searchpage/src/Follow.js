import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import People from 'material-ui/svg-icons/social/people-outline';
import IconButton from 'material-ui/IconButton';




const style = {
    height: 275,
    width: 212,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    float:'right',
    marginTop:245,
    marginLeft: '145px',
    position:'absolute'
};

const button = { 
    float:'left',
    marginLeft:'80px',
    marginTop:'-30px',
    borderRadius: 20, 
    borderStyle: 'solid', 
    borderWidth: '1px', 
    borderColor: '#1da1f2', 
    color: '#1da1f2', 
    height: '30px',
    textAlign: 'center',
    verticalAlign:'center',

}
const Follow = () => (
    
    
    <Card style={style}>   
        <div style={{ marginTop: 12, paddingLeft: 20, fontWeight: 'bold', textAlign: 'left', fontSize: '13px' }}> Who to follow 
        <span style={{ fontSize: '10px', fontWeight: 'normal', color: '#1c94e0' }}> · <a>Refresh</a> · <a>View all</a>
        </span> 
        </div>
        <CardHeader
            title={<div><h5 style={{ marginTop: '3px', fontFamily: "Helvetica", textAlign: 'left', display: 'inline-block', float: 'left' }}>
            <a>Narendra Modi</a></h5><span style={{ position: 'absolute', marginTop: '5px', fontSize: '11px', display: 'inline-block', textAlign: 'left', paddingLeft: 4, color:'#657786'}}>@naren...
            </span></div>}
            avatar={<Avatar src="./follow1.jpg" style={{float:'left',marginBottom:'13px'}} />}
        />
        <FlatButton label="Follow" labelStyle={{ paddingBottom: '20px', textAlign: 'center', textTransform: 'capitalize', fontSize: 9, fontWeight: 700 }} style={button} />
        <CardHeader
            title={<div><h5 style={{ marginTop: '3px', fontFamily: "Helvetica", textAlign: 'left', display: 'inline-block', float: 'left' }}>
            <a>Google India</a></h5>
            <span style={{ position: 'absolute', marginTop: '5px', fontSize: '11px', display: 'inline-block', textAlign: 'left', paddingLeft: 4, color: '#657786'}}>@Google....
            </span></div>}
            avatar={<Avatar src="./follow2.jpg" style={{ float: 'left', marginBottom: '13px' }} />}
        />
        <FlatButton label="Follow" labelStyle={{ paddingBottom: '20px', textAlign: 'center', textTransform: 'capitalize', fontSize: 9, fontWeight: 700 }} style={button} />
        <CardHeader
            title={<div><h5 style={{ marginTop: '3px', fontFamily: "Helvetica", textAlign: 'left', display: 'inline-block', float: 'left' }}>
            <a>TechCrunch</a></h5><span style={{ position: 'absolute', marginTop: '5px', fontSize: '11px', display: 'inline-block', textAlign: 'left', paddingLeft: 4, color: '#657786'}}>@TechCru....
            </span></div>}
            avatar={<Avatar src="./follow3.jpg" style={{ float: 'left', marginBottom: '13px' }} />}
        />
        <FlatButton label="Follow" labelStyle={{ paddingBottom: '20px', textAlign: 'center', textTransform: 'capitalize', fontSize: 9, fontWeight: 700 }} style={button} />
        
        <IconButton className="floatingButton"
            backgroundColor='#293C8E'
            tooltip="Find people you may know"
            tooltipPosition="top-center"
            style={{
                width: 10,
                height: 10,
                marginTop: -9,
                paddingRight: 15,
                float: 'left'
            }}>
            <People color={'#1DA1F2'} viewBox="0 0 40 20" />
        </IconButton> 
        <span style={{ fontSize: '10px', float: 'left', marginTop: 10, color: '#1c94e0' }}>&nbsp; 
        <a>Find people you know</a>
        </span>

    </Card>
   
);

export  default Follow;
