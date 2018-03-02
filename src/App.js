import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Mall, My, News, Theater } from './js/containers'
// import axios from 'axios';
import './App.css';

import { Nav } from "./js/components/index";

class App extends Component {

    // componentDidMount(){
    //     axios.get('').then(res=>{
    //         console.log(res);
    //     })
    // }
    render() {
        return (
            <div className="App">
                <Nav />
                <div className="main">
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/mall' exact component={Mall} />
                        <Route path='/my' exact component={My} />
                        <Route path='/news' exact component={News} />
                        <Route path='/theater' exact component={Theater} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
