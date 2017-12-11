import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { grey500, grey600, blue500 } from 'material-ui/styles/colors';


const iconStyles1 = {
    marginLeft: 30
};
const iconStyles2 = {
    marginLeft: 32
};
const iconStyles3 = {
    marginLeft: 33
};
const divStyle = {
    marginRight: 800,
    marginTop: -2
};
const span1 = {
    marginLeft: 10,
    fontSize: 13
};
const span2 = {
    marginLeft: 10
};
const span3 = {
    marginLeft: 10
};

const Buttons = () => (
    <div style={divStyle}>
        <IconButton tooltip="Home">
            <FontIcon className="material-icons" style={iconStyles1} color={grey600} hoverColor={blue500}>home</FontIcon>
            <span style={span1}>Home</span>
        </IconButton>
            <IconButton tooltip="Notifications">
            <FontIcon className="material-icons" style={iconStyles2} color={grey600} hoverColor={blue500}>notifications</FontIcon>
            <span style={span2}>Notifications</span>
            </IconButton>
                <IconButton tooltip="Messages">
            <FontIcon className="material-icons" style={iconStyles3} color={grey600} hoverColor={blue500}>messages</FontIcon>
            <span style={span3}>Messages</span>
        </IconButton>
    </div>
);

export default Buttons;