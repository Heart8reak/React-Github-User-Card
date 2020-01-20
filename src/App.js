import React from 'react';
import { Route } from 'react-router-dom';

import Search from './components/Search';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
      </div>
      {/* <Home /> */}
    </div>
  );
};

export default App;
