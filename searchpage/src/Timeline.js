import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import More from 'material-ui/svg-icons/navigation/expand-more';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';



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
    paddingBottom: 7,
    marginTop:-23,
    position:'absolute' 
  }

const style1={
    height: 150,
    width: 500,
    margin: 1,
    display: 'inline-block',
    float: 'right',
    marginRight: 385,
    marginTop:10,
    cursor:'pointer'
}

const Timeline = () => (
    <div>
    <Card style={style1}>
        <CardHeader 
                title={<div><p style={titleStyle}><b style={{ fontSize: 12 }}><a>Arvind Jha</a> </b> </p><p style={subtitle}>@jalajboy · 
                <a>Dec 6</a></p></div>}
            avatar="./timelineav1.jpg"
        />
            <IconMenu
                iconButtonElement=
                    {<IconButton style={{ float: 'right', marginLeft: 455,marginTop:-80, position: 'absolute' }} className="floatingButton"
                backgroundColor='#66757f'>
                <More color={'#66757f'} style={{ float: 'right' }} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute @jalajboy</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Block @jalajboy</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
        <CardText style={{marginTop:-30}}>
                <span style={{ fontFamily: "sans-serif", fontSize: 10 }}>First they pushed SMS, email
                    Then they started calls
                    Finally they’ve started adding <b>Aadhaar</b> without your consent
                    Govt is by-passing SC. And claiming majority want it. </span>
        </CardText >
        
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


        <Card style={{
            height: 556,
            width: 500,
            margin: 5,
            display: 'inline-block',
            float: 'right',
            marginRight: 385,
            cursor: 'pointer'}}>
            <CardHeader
                title={<div><p style={titleStyle}><b style={{ fontSize: 12 }}><a>Beebom</a> </b> </p><p style={subtitle}>@beebomco · 
                <a>Dec 6</a></p></div>}
                avatar="./timelineav2.jpeg"
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
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute @beebomco</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Block @beebomco</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <CardText style={{ marginTop: -30 }}>
                <span style={{ fontFamily: "sans-serif", fontSize: 10,paddingBottom:100}}>65-year-old Sajidha Begum has lost her 
                sight and fingers, and she has no way of submitting the necessary fingerprints and iris scans.

                In August, however, the Indian government sent a letter to her saying her 
                pension was being taken away unless it was linked to an<b> Aadhaar</b> card. 
                </span>
            </CardText >
            <CardMedia style={imgStyle}>
                <img src="./timeline2.jpg" alt="beebom" style={{ borderRadius: 4,  }} />
            </CardMedia>
            <div style={{ position: 'absolute' }}>
                <IconButton iconStyle={{height: 15, 
                        maxWidth: 15, 
                        paddingBottom: 7,
                        marginTop:-10,
                        position:'absolute' }} tooltip="Reply" tooltipPosition="top-center">
                    <img src="./reply1.png" />
                </IconButton>
                <IconButton iconStyle={{height: 15, 
                        maxWidth: 15, 
                        paddingBottom: 7,
                        marginTop:-10,
                        position:'absolute' }} tooltip="Retweet" tooltipPosition="top-center" >
                    <img src="./retweet.png" />
                </IconButton>
                <IconButton iconStyle={{height: 15, 
                        maxWidth: 15, 
                        paddingBottom: 7,
                        marginTop:-10,
                        position:'absolute' }} tooltip="Like" tooltipPosition="top-center" >
                    <img src="./like.png" />
                </IconButton>
                <IconButton iconStyle={{
                    height: 15,
                    maxWidth: 15,
                    paddingBottom: 7,
                    marginTop: -10,
                    position: 'absolute'
                }} tooltip="Direct message" tooltipPosition="top-center" >
                    <img src="./DM.png" />
                </IconButton>
            </div>



        </Card>

        <Card style={{
            height: 148,
            width: 500,
            margin: 5,
            display: 'inline-block',
            float: 'right',
            marginRight: 385,
            marginTop:-1,
            cursor: 'pointer'
        }}>
            <CardHeader
                title={<div><p style={titleStyle}><b style={{ fontSize: 12 }}><a>Rahul Singh</a> </b> </p>
                <p style={subtitle}>@rahulsingh1996 · <a>Dec 5</a></p></div>}
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
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute @rahulsingh1996</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Block @rahulsingh1996</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <CardText style={{ marginTop: -30 }}>
                <span style={{ fontFamily: "sans-serif", fontSize: 10 }}>Finally. Good news from UIDAI 

                    If your <b>Aadhaar</b> Card is not linked with your marriage certificate before 
                    31st December 2017, you will be considered single from 1st Jan 2018.</span>
            </CardText >
            
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

        <Card style={{
            height: 435,
            width: 500,
            margin: 5,
            display: 'inline-block',
            float: 'right',
            marginRight: 385,
            marginTop: -1,
            cursor: 'pointer'
        }}>
            <CardHeader
                title={<div><p style={titleStyle}><b style={{ fontSize: 12 }}><a>Kiran Jonnalagadda‏</a> </b> </p>
                <p style={subtitle}>@jackerhack · <a>Dec 5</a></p></div>}
                avatar="./timelineav4.jpeg"
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
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute @jackerhack</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Block @jackerhack</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <CardText style={{ marginTop: -30 }}>
                <span style={{ fontFamily: "sans-serif", fontSize: 10 }}>What is this? 
                The government insists on sharing your <b>Aadhaar</b> number with third parties, as a 
                condition for getting a job? Regardless of what it actually means, do they not understand the 
                implications of a message that <b>Aadhaar</b> numbers are for sharing?  
                </span>
            </CardText >
            <CardMedia style={imgStyle}>
                <img src="./timeline4.jpg" alt="kiran" style={{ borderRadius: 4, maxHeight: '250px' }} />
            </CardMedia>
            <div style={{ position: 'absolute' }}>
                <IconButton iconStyle={{
                        height: 15, 
                        maxWidth: 15, 
                        paddingBottom: 7,
                        marginTop:-2,
                        position:'absolute' 
                    }
                    } tooltip="Reply" tooltipPosition="top-center">
                    <img src="./reply1.png" />
                </IconButton>
                <IconButton iconStyle={{
                        height: 15, 
                        maxWidth: 15, 
                        paddingBottom: 7,
                        marginTop:-2,
                        position:'absolute' 
                    
            }} tooltip="Retweet" tooltipPosition="top-center" >
                    <img src="./retweet.png" />
                </IconButton>
                <IconButton iconStyle={{
                        height: 15, 
                        maxWidth: 15, 
                        paddingBottom: 7,
                        marginTop:-2,
                        position:'absolute' 
                    }
            } tooltip="Like" tooltipPosition="top-center" >
                    <img src="./like.png" />
                </IconButton>
                <IconButton iconStyle={{
                        height: 15, 
                        maxWidth: 15, 
                        paddingBottom: 7,
                        marginTop:-2,
                        position:'absolute' 
                    }
            } tooltip="Direct message" tooltipPosition="top-center" >
                    <img src="./DM.png" />
                </IconButton>
            </div>



        </Card>

        <Card style={{
            height: 164,
            width: 500,
            margin: 5,
            display: 'inline-block',
            float: 'right',
            marginRight: 385,
            marginTop: -1,
            cursor: 'pointer'
        }}>
            <CardHeader
                title={<div><p style={titleStyle}><b style={{ fontSize: 12 }}><a>Anivar Aravind</a> </b> </p>
                <p style={subtitle}>@anivar · <a>Dec 8</a></p></div>}
                avatar="./timelineav5.jpg"
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
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute @anivar</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Block @anivar</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <CardText style={{ marginTop: -30 }}>
                <span style={{ fontFamily: "sans-serif", fontSize: 10 }}>Finally. Good news from UIDAI

                    Tomorrow <span style={{ color: '#1da1f2' }}><a>#HumanRightsDay</a></span> marks 1540  
                    days since 1st <b>Aadhaar</b> interim verdict (23rd sep 2013) which stated

                    "No person should suffer for not getting the <b>aadhaar</b> inspite of the fact 
                    that some authority issued a circular making it mandatory"
</span>
            </CardText >

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