import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './AppBarExampleIcon';
import FlatButtonExampleIcon from './IconsTop';
import Navbarnew from './Navbarnew';
import Profilenew from './Profilenew';
import Trendsnew from './Trendsnew';
import Timelinenew from './Timelinenew';
import Follow from './Follow';
import Footer from './Footer';
import TweetBoxnew from './TweetBoxnew';


const App = () => (
  <MuiThemeProvider>
    <Navbarnew  />
    <Profilenew  />
    <TweetBoxnew />
    < Timelinenew />
  <Follow />
    <Footer />
    <Trendsnew />
    
  </MuiThemeProvider>
);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);



registerServiceWorker();
