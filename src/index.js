import React from 'react'
import { render } from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

import Layout from './components/Layout'
import Repo from './components/Repo'
import FavoritePage from './components/FavoritePage'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <Route path=  "/FavoritePage"  component = {FavoritePage}>
        
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
