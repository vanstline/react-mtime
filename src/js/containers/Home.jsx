import React, { Component } from 'react';
import { Search, HotMove, Loading } from '../components';
import axios from 'axios';
import Api from '../api';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            movies: ''
        }
    }

    componentDidMount() {
        axios(Api.indexMoveApi).then( ({data}) => {
            console.log(data);
            this.setState({
                movies: data,
                show: false
            })
        } )
            .catch( err => {
                this.setState({
                    show: true
                })
                throw `${err}:请求失败`;
            } )


    }


    render() {
        console.log(this.state.show, 123);
        return (
            <div>
                <Loading show={this.state.show}></Loading>
                <Search></Search>
                <HotMove data={this.state.movies} />

            </div>
        )
    }
}

export default Home;