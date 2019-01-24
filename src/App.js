import React, { Component } from 'react';

import './App.css';
import {Provider} from 'react-redux';


import Posts from './components/posts';
import PostForm from './components/postform';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <PostForm />
        <Posts/>
      </div>
      </Provider>
    );
  }
}

export default App;
