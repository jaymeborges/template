import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Album from '../components/user/Album'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={Album} />
        <Redirect from='*' to='/' />
    </Switch>