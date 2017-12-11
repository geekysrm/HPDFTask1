import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

const avatarStyle={
   float:'left',
   position:'absolute',
    marginTop:80,
    marginLeft:5,
    padding:2,
    boxShadow: 'inset 0 0 0 12px white'
}
const titleStyle={
    fontSize:13,
    fontWeight:'bold',
    paddingLeft:20
}
const subtitleStyle={
    fontSize: 11,
    paddingLeft:20
}

const Profilenew = () => (
    <Card style={{ width: '213px',height:'218px', marginLeft: '135px', marginTop: '10px',display:'inline-block',float:'left'}}>
        <img src="./image.jpg" alt="none" width="213px" height="100px" style={{  position: 'absolute'}} />
        <Avatar src="./mypic.jpg" size='48px' style={avatarStyle} />
        <div style={{paddingTop:90}}>
        <CardHeader
            style={{marginLeft:20}}
            title="Soumya Rn. Mohanty"
            subtitle="@SoumyaRnMohanty"
                titleStyle={titleStyle}
                subtitleStyle={subtitleStyle}/>
            
    

        <span style={{ position:'absolute',color: '#657786', fontSize: 10, fontWeight:'bold',paddingLeft:15 }}>
        Tweets &nbsp;&nbsp;&nbsp; Following &nbsp;&nbsp;&nbsp; Followers
        </span>
        <br/>
        <span style={{ position: 'absolute', color: '#03A9F4', marginBottom: '10px'}}>
            <span style={{ paddingLeft: 17 }}>50</span> <span style={{ paddingLeft: 25}}> 408</span> <span style={{ paddingLeft: 29}}>10K</span>
        </span>
        </div>
    </Card>
);

export default Profilenew;