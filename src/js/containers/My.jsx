import React, { Component } from 'react';
import { Search, HotMove, Loading } from '../components';

class My extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <div>
                <Loading show={this.state.show}></Loading>
                My
            </div>
        )
    }
}

export default My;