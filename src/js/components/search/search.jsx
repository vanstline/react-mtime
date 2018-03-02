
import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Search extends Component {

    render() {

        return (
            <div className='head_search clearFix'>
                <div className="cityShow ">
                    <p>北京</p>
                    <i></i>
                </div>
                <div className="input">
                    <Link to='/my'>
                        <span>影片/影院/影人，任你搜</span>
                    </Link>
                </div>
            </div>
        )
    }
}


export default Search;