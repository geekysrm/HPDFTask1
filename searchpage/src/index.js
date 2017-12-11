import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './AppBarExampleIcon';
import FlatButtonExampleIcon from './IconsTop';
import Navbarnew from './Navbarnew';
import Query from './Query';
import Trendsnew from './Trendsnew';
import Timelinenew from './Timelinenew';
import Follow from './Follow';
import Footer from './Footer';
import TweetBoxnew from './TweetBoxnew';
import Typebar from './Typebar';
import RelatedSearches from './RelatedSearches';
import People from './People';

const App = () => (
  <MuiThemeProvider>
    <Navbarnew  />
    <Query />
    <Typebar />
    <People />
    < Timelinenew />
  <Follow />
    
    <RelatedSearches />
    <Trendsnew />
    <Footer />
  </MuiThemeProvider>
);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);



registerServiceWorker();
