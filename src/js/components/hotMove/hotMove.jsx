
import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class HotMove extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let { movies, totalHotMovie } = this.props.data;
        console.log(1)
        return (
            <div className='indexmovie'>
                <h2 className='movieTitle'>
                    <Link to='/my'>
                        <span>正在热映（{totalHotMovie}部）</span><i></i>
                    </Link>
                </h2>
                <ul>
                    {
                        movies && movies.map( item => {
                            return (
                                <li key={item.movieId} className='moveList'>
                                    <Link to='/mall'>
                                        <div className="pic">
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <p className='text'><span>{item.titleCn}</span></p>
                                    </Link>
                                </li>
                            )
                        } )
                    }
                </ul>
            </div>
        )
    }
}


export default HotMove;