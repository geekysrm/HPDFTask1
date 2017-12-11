import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
import Query from './Query';
import Trends from './Trends';
import Timeline from './Timeline';
import Follow from './Follow';
import Footer from './Footer';
import Typebar from './Typebar';
import RelatedSearches from './RelatedSearches';
import People from './People';

const App = () => (
  <MuiThemeProvider>
    <Navbar  />
    <Query />
    <Typebar />
    <People />
    <Timeline />
    <Follow />
    <RelatedSearches />
    <Trends />
    <Footer />
  </MuiThemeProvider>
);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
