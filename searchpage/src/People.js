import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';

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

const button = {
    float: 'left',
    marginLeft: '120px',
    marginTop: '-45px',
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#1da1f2',
    color: '#1da1f2',
    height: '30px',
    textAlign: 'center',
    verticalAlign: 'center',

}

const People = () => (
    <div style={{marginLeft:250}}>
    <Card style={{ width: '243px',height:'218px', marginLeft: '135px', marginTop: '10px',display:'inline-block',float:'left'}}>
        <img src="./people1pic.jpeg" alt="none" width="243px" height="100px" style={{  position: 'absolute'}} />
        <Avatar src="./people1av.jpg" size='48px' style={avatarStyle} />
        <div style={{paddingTop:90}}>
        <CardHeader
            style={{marginLeft:20}}
                    title="Aadhaar"
            subtitle="@UIDAI"
             titleStyle={titleStyle}
            subtitleStyle={subtitleStyle}/>
                <IconMenu
                    iconButtonElement={<IconButton ><MoreVertIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    style={{float:'right',marginTop:-53, position: 'absolute', paddingLeft: 200 }}
                    menuStyle={{width:150,height:344}}
                >
                    <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786'}}>Tweet to @UIDAI</span>} />
                    <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add or remove from lists...</span>} />
                    <Divider />
                    <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute @UIDAI</span>} />
                    <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786'}}>Block @UIDAI</span>} />
                    <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786'}}>Report @UIDAI</span>} />
                    <Divider />
                    <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Embed this Profile</span>} />

                </IconMenu>
            <FlatButton label="Follow" labelStyle={{ paddingBottom: '20px', textAlign: 'center', textTransform: 'capitalize', fontSize: 9, fontWeight: 700 }} style={button} />
                
                <span style={{fontSize:'11px',float:'left',paddingLeft:10}}>
                 Official Twitter account of the Unique Identification Authority of India. RTs are not endorsements
                </span>
                <span style={{ fontSize: '10px', float: 'left', paddingLeft: 10, paddingTop: 7, color: '#657786' }}>
                Followed by <span style={{ color: '#1da1f2' }}><a>PMO India</a></span > and <span style={{ color: '#1da1f2' }}>
                <a>4 others</a></span>
                </span>
        </div>
    </Card>
        <Card style={{ width: '243px', height: '218px', marginLeft: '12px', marginTop: '10px', display: 'inline-block', float: 'left' }}>
            <img src="./people2pic.png" alt="none" width="243px" height="100px" style={{ position: 'absolute' }} />
            <Avatar src="./people2av.jpeg" size='48px' style={avatarStyle} />
            <div style={{ paddingTop: 90 }}>
                <CardHeader
                    style={{ marginLeft: 20 }}
                    title="Nandan Nilekani"
                    subtitle="@NandanNilekani"
                    titleStyle={titleStyle}
                    subtitleStyle={subtitleStyle} />
                <IconMenu
                    iconButtonElement={<IconButton ><MoreVertIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    style={{ float: 'right', marginTop: -68, position: 'absolute', paddingLeft: 200 }}
                    menuStyle={{ width: 150, height: 344 }}
                >
                    <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Tweet to @NandanNilekani</span>} />
                    <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add or remove from lists...</span>} />
                    <Divider />
                    <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute @NandanNilekani</span>} />
                    <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Block @NandanNilekani</span>} />
                    <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Report @NandanNilekani</span>} />
                    <Divider />
                    <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786'}}>Embed this Profile</span>} />

                </IconMenu>
                
                <FlatButton label="Follow" labelStyle={{ paddingBottom: '20px', textAlign: 'center', textTransform: 'capitalize', fontSize: 9, fontWeight: 700 }} 
                    style={{float: 'left',
                            marginLeft: '120px',
                            marginTop: '-60px',
                            borderRadius: 20,
                            borderStyle: 'solid',
                            borderWidth: '1px',
                            borderColor: '#1da1f2',
                            color: '#1da1f2',
                            height: '30px',
                            textAlign: 'center',
                            verticalAlign: 'center',}} />

                <span style={{ fontSize: '11px', float: 'left', paddingLeft: 10 }}>Co-founder of <span style={{ color: '#1DA1F2', cursor: 'pointer' }}> 
                <a>@Infosys</a></span>. Worked on<span style={{ color: '#1DA1F2', cursor: 'pointer' }}> 
                <a>#Aadhaar</a></span>.Co-author of <span style={{ color: '#1DA1F2', cursor: 'pointer' }}>
                <a>@RebootingIndia</a></span>.</span>
                <span style={{ fontSize: '10px', float: 'left', paddingLeft: 10, paddingTop: 7, color: '#657786' }}>
                    Followed by <span style={{ color: '#1da1f2' }}><a>Phonepe</a></span >
                </span>
            </div>
        </Card>
    </div>
);

export default People;