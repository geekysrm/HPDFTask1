import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';


import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

const style = {
    height: 30,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center'
}

const textStyle={
    fontSize: 12,
    textAlign: 'center',
    paddingLeft: 15,
    color: '#66757f',
    display: 'inline-block',
    cursor: 'pointer',
    fontWeight:'bold'
}

export default class TypeBar extends React.Component {
    render() {
        return (
            <Paper style={style} zDepth={1} >
                <Toolbar style={style}>
                    <ToolbarGroup firstChild={true}>
                        
                        <span style={{fontSize: 12,
                                textAlign: 'center',
                                paddingLeft: 138,
                                color: '#66757f',
                                display: 'inline-block',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                        }}><a>Top</a></span>
                       
                            <span style={textStyle}><a>Latest</a></span>
                            
                            <span style={textStyle}><a>People</a></span>

                            <span style={textStyle}><a>Photos</a></span>

                            <span style={textStyle}><a>Videos</a></span>

                            <span style={textStyle}><a>News</a></span>

                            <span style={textStyle}><a>Broadcasts</a></span>
                    </ToolbarGroup>
                    
                    <ToolbarGroup>
                        <IconMenu
                            iconButtonElement={<IconButton ><MoreVertIcon /></IconButton>}
                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                            style={{ float: 'right', marginTop: -1, position: 'absolute', paddingLeft: 620 }}
                            menuStyle={{ width: 150, height: 180 }}
                        >
                            <MenuItem primaryText={<span style={{ fontSize: '11px' }}>Search settings</span>} />
                            <Divider />
                            <MenuItem primaryText={<span style={{ fontSize: '11px' }}>Save this search</span>} />
                            
                            <MenuItem primaryText={<span style={{ fontSize: '11px' }}>Embed this search</span>} />
                            

                        </IconMenu>
                    </ToolbarGroup>


                </Toolbar>
            </Paper>
        );
    }
}