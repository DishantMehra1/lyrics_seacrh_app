import React, { Component } from 'react';
import axios from 'axios';

import { Consumer } from '../../context';

class Seacrh extends Component {
    state = {
        trackTitle: ''
    };

    findTrack = (dispatch, e) => {
        e.preventDefault();

        axios.get(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc
            &apikey=467a6d3defe6c7f2f7b2942797a91cdb`
        )
            .then(res => {
                // console.log(res.data);
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: res.data.message.body.track_list
                });
                this.setState({trackTitle:''});
            })
            .catch(err => console.log(err));
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Consumer>
                {value => {
                    // console.log(value);
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-4 p-4" >
                            <h1 className="display-4 text-center" >
                                <i className="fas fa-music" >Search For A Song</i>
                            </h1>
                            <h5 className="lead text-center" >Get The lyrics for any song</h5>
                            <form onSubmit={this.findTrack.bind(this, dispatch)} >
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg" placeholder="Enter song title..."
                                        name="trackTitle"
                                        value={this.state.trackTitle}
                                        onChange={this.onChange} >
                                    </input>
                                    <button className="btn btn-primary btn-lg btn-block mb-5" type="submit" >Get Track Lyrics </button>
                                </div>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        );
    };
};

export default Seacrh;
