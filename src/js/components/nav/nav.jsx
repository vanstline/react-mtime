import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

    render(){
        return (
            <div>
                <ul className="navUl">
                    <li>
                        <NavLink to='/' exact activeClassName="selected">
                            <i className="Logo"></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/' exact >
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/mall' >
                            <span>购票</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/theater' >
                            <span>商城</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/news' >
                            <span>发现</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/my' >
                            <i className="user"></i>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}


export default Nav;
