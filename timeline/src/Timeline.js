import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import More from 'material-ui/svg-icons/navigation/expand-more';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


const style = {
    height: 415,
    width: 500,
    margin:5,
    display: 'inline-block',
    float: 'right',
    marginRight: 400,
}

const titleStyle={
    marginTop:9,
    display:'inline-block'
}

const imgStyle={
    maxWidth: 500,
    paddingLeft:5,
    paddingRight:5
}
const subtitle={
    marginTop: 9,
    fontSize:12,
    paddingLeft:8,
    display: 'inline-block',
    color:'grey'
}

const iconStyle={
    height: 15, 
    maxWidth: 15, 
    paddingBottom: 7 
}

const style1={
    height: 415,
    width: 500,
    margin: 1,
    display: 'inline-block',
    float: 'right',
    marginRight: 400,
}

const Timeline = () => (
    <div>
    <Card style={style1}>
        <CardHeader 
                title={<div><p style={titleStyle}><b style={{ fontSize: 12 }}>Nat Geo </b> </p><p style={subtitle}>@NatGeo · <a>1h</a>
                        </p></div>}
            avatar="./timelineav1.jpg"
        />
            <IconMenu
                iconButtonElement=
                {<IconButton style={{ float: 'right', marginLeft: 455, marginTop: -80, position: 'absolute' }} className="floatingButton"
                    backgroundColor='#66757f'>
                    <More color={'#66757f'} style={{ float: 'right' }} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute @NatGeo</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Block @NatGeo</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
        <CardText style={{marginTop:-30}}>
            <span style={{ fontFamily: "sans-serif", fontSize: 10 }}>When an animal gets scared, it either stays very still or revs up 
            for a "fight or flight" response—but elephants do both.</span>
        </CardText >
        <CardMedia style={imgStyle}>
            <img src="./timeline1.jpg" alt="elephant wildlife" style={{borderRadius:4,maxHeight:'250px'}}/>
        </CardMedia>
            <div style={{position:'absolute'}}>
            <IconButton  iconStyle={iconStyle} tooltip="Reply" tooltipPosition="top-center">
                <img src="./reply1.png" />
            </IconButton>
            <IconButton iconStyle={iconStyle} tooltip="Retweet" tooltipPosition="top-center" >
                <img src="./retweet.png" />
            </IconButton>
            <IconButton iconStyle={iconStyle} tooltip="Like" tooltipPosition="top-center" >
                <img src="./like.png" />
            </IconButton>
            <IconButton iconStyle={iconStyle} tooltip="Direct message" tooltipPosition="top-center" >
                <img src="./DM.png" />
            </IconButton>
            </div>

        
        
    </Card>


        <Card style={style}>
            <CardHeader
                title={<div><p style={titleStyle}><b style={{ fontSize: 12 }}>Times of India </b> </p><p style={subtitle}>@timesofindia · <a>4h</a>
                </p></div>}
                avatar="./timelineav2.jpg"
            />
            <IconMenu
                iconButtonElement=
                {<IconButton style={{ float: 'right', marginLeft: 455, marginTop: -80, position: 'absolute' }} className="floatingButton"
                    backgroundColor='#66757f'>
                    <More color={'#66757f'} style={{ float: 'right' }} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute @timesofindia</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Block @timesofindia</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <CardText style={{ marginTop: -30 }}>
                <span style={{ fontFamily: "sans-serif", fontSize: 10 }}>We believe that every American should stand for the National Anthem, 
                and we proudly pledge allegiance to one NATION UNDER GOD! :<b> Donald Trump</b>
                </span>
            </CardText >
            <CardMedia style={imgStyle}>
                <img src="./timeline2.jpg" alt="donald-trump" style={{ borderRadius: 4, maxHeight: '250px' }} />
            </CardMedia>
            <div style={{ position: 'absolute' }}>
                <IconButton iconStyle={iconStyle} tooltip="Reply" tooltipPosition="top-center">
                    <img src="./reply1.png" />
                </IconButton>
                <IconButton iconStyle={iconStyle} tooltip="Retweet" tooltipPosition="top-center" >
                    <img src="./retweet.png" />
                </IconButton>
                <IconButton iconStyle={iconStyle} tooltip="Like" tooltipPosition="top-center" >
                    <img src="./like.png" />
                </IconButton>
                <IconButton iconStyle={iconStyle} tooltip="Direct message" tooltipPosition="top-center" >
                    <img src="./DM.png" />
                </IconButton>
            </div>



        </Card>

        <Card style={style}>
            <CardHeader
                title={<div><p style={titleStyle}><b style={{ fontSize: 12 }}>CNN Breaking News </b> </p><p style={subtitle}>@cnnbrk · <a>2h</a>
                </p></div>}
                avatar="./timelineav3.jpg"
            />
            <IconMenu
                iconButtonElement=
                {<IconButton style={{ float: 'right', marginLeft: 455, marginTop: -80, position: 'absolute' }} className="floatingButton"
                    backgroundColor='#66757f'>
                    <More color={'#66757f'} style={{ float: 'right' }} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute @cnnbrk</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Block @cnnbrk</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <CardText style={{ marginTop: -30 }}>
                <span style={{ fontFamily: "sans-serif", fontSize: 10 }}>Prime Minister Narendra Modi talks about 3 factors that 
                helped reduce corruption, bring transparency. Also speaks about de-monetisation.
                </span>
            </CardText >
            <CardMedia style={imgStyle}>
                <img src="./timeline3.jpg" alt="narendra-modi" style={{ borderRadius: 4, maxHeight: '250px' }} />
            </CardMedia>
            <div style={{ position: 'absolute' }}>
                <IconButton iconStyle={iconStyle} tooltip="Reply" tooltipPosition="top-center">
                    <img src="./reply1.png" />
                </IconButton>
                <IconButton iconStyle={iconStyle} tooltip="Retweet" tooltipPosition="top-center" >
                    <img src="./retweet.png" />
                </IconButton>
                <IconButton iconStyle={iconStyle} tooltip="Like" tooltipPosition="top-center" >
                    <img src="./like.png" />
                </IconButton>
                <IconButton iconStyle={iconStyle} tooltip="Direct message" tooltipPosition="top-center" >
                    <img src="./DM.png" />
                </IconButton>
            </div>



        </Card>

        <Card style={style}>
            <CardHeader
                title={<div><p style={titleStyle}><b style={{ fontSize: 12 }}>Paytm </b> </p><p style={subtitle}>@Paytm · <a>6h</a>
                </p></div>}
                avatar="./timelineav4.jpg"
            />
            <IconMenu
                iconButtonElement=
                {<IconButton style={{ float: 'right', marginLeft: 455, marginTop: -80, position: 'absolute' }} className="floatingButton"
                    backgroundColor='#66757f'>
                    <More color={'#66757f'} style={{ float: 'right' }} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute @Paytm</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Block @Paytm</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <CardText style={{ marginTop: -30 }}>
                <span style={{ fontFamily: "sans-serif", fontSize: 10 }}>We are extremely proud to announce that we have 
                received INR 1 Crore+ from Paytm users across India for the Armed Forces Flag Day Fund. 
                </span>
            </CardText >
            <CardMedia style={imgStyle}>
                <img src="./timeline4.jpg" alt="paytm" style={{ borderRadius: 4, maxHeight: '250px' }} />
            </CardMedia>
            <div style={{ position: 'absolute' }}>
                <IconButton iconStyle={iconStyle} tooltip="Reply" tooltipPosition="top-center">
                    <img src="./reply1.png" />
                </IconButton>
                <IconButton iconStyle={iconStyle} tooltip="Retweet" tooltipPosition="top-center" >
                    <img src="./retweet.png" />
                </IconButton>
                <IconButton iconStyle={iconStyle} tooltip="Like" tooltipPosition="top-center" >
                    <img src="./like.png" />
                </IconButton>
                <IconButton iconStyle={iconStyle} tooltip="Direct message" tooltipPosition="top-center" >
                    <img src="./DM.png" />
                </IconButton>
            </div>



        </Card>
    </div>
);

export default Timeline;