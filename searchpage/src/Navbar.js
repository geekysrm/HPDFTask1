import React from 'react';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Home from 'material-ui/svg-icons/action/home';
import Notifications from 'material-ui/svg-icons/social/notifications-none';
import Messages from 'material-ui/svg-icons/communication/mail-outline';


import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

const style= {
    height:30,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center'
    
    
}

const button={
    borderRadius: '22px',
    fontWeight: 800,
    padding: '8px',
    border: 'white solid 0px',
    backgroundColor: '#4ab3f4',
    color: 'white',
    position: 'absolute',
    marginLeft: 230,
    marginTop: -56,
    height:28,
    width:60,
    fontSize:'11px',
    cursor:'pointer'
}
const imgStyle={
    width:19,
    height:18,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 240,
    marginTop:-8,
    cursor:'pointer'
}

const Paperstyle={
   marginLeft: 480,
    width : 180,
    height: 20,
    borderRadius: 20,
    backgroundColor:'#f5f8fa'
}
const inputStyle={
    position:'absolute',
    width: 170,
    height: 20,
    paddingLeft: 9,
    fontSize:12,
    marginTop:1

}
const imgStyle1 = {
    width: 19,
    height: 18,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 637,
    marginTop: 1,
    pointer:'cursor'
}

const avatar={
    borderRadius: '50%',
     width: 26, 
     height: 26,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 670,
    marginTop: -3,
    pointer: 'cursor'
}



export default class Navbar extends React.Component {
    render() {
        return (
            <Paper style={style} zDepth={1} >
            <Toolbar style={style}>
                <ToolbarGroup firstChild={true}>
                        <IconButton style={{ float: 'right',marginLeft:120,position:'absolute'}} className="floatingButton"
                            backgroundColor='#66757f'>
                            <Home color={'#66757f'} style={{ float: 'right' }} />
                        </IconButton>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 160,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}><a>Home</a></span>
                        <IconButton style={{ float: 'right', marginLeft: 185, position: 'absolute' }} className="floatingButton"
                            backgroundColor='#66757f'>
                            <Notifications color={'#66757f'} style={{ float: 'right' }} />
                        </IconButton>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 30,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}><a>Notifications</a></span>
                        <IconButton style={{ float: 'right', marginLeft: 285, position: 'absolute' }} className="floatingButton"
                            backgroundColor='#66757f'>
                            <Messages color={'#66757f'} style={{ float: 'right' }} />
                        </IconButton>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 30,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor:'pointer',
                            fontWeight: 'bold'
                        }}><a>Messages</a></span>
                </ToolbarGroup>
                <ToolbarGroup >
                    <img style={imgStyle} src="./twitter.png"/>
                </ToolbarGroup>
                <ToolbarGroup>
                        <Paper style={Paperstyle} zDepth={1} >
                        <TextField
                            underlineShow ={false}
                            defaultValue="aadhaar"
                            inputStyle={inputStyle}
                                
                        />
                            <img src="./search.png" style={imgStyle1} />
                            <img src="./mypic.jpg" style={avatar} alt="Avatar" />
                            
                            <button style={button}>Tweet</button>
                            
                        </Paper>
                </ToolbarGroup>

                
            </Toolbar>
            </Paper>
        );
    }
}