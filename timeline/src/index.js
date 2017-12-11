import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
import Profile from './Profile';
import Trends from './Trends';
import Timeline from './Timeline';
import Follow from './Follow';
import Footer from './Footer';
import TweetBox from './TweetBox';

const App = () => (
  <MuiThemeProvider>
    <Navbar />
    <Profile  />
    <TweetBox />
    < Timeline />
    <Follow />
    <Footer />
    <Trends />
    
  </MuiThemeProvider>
);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
