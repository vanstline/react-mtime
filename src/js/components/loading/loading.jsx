
import React, { Component } from 'react';
import './index.css';

class Loading extends Component {

    constructor(props){
        super(props);
    }

    render() {

        let { show } = this.props;
        console.log(show);
        let showClass = 'loading show';
        if(show) {
            showClass = 'loading show'
        } else {
            showClass = 'loading hide'
        }
        return (
            <div>
                <div className={showClass}>
                    <i></i>
                </div>
            </div>
        )
    }
}

export default Loading;