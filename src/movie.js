import React, { Component } from 'react';
import './movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string,
        genres: PropTypes.array,
        synopsis: PropTypes.string
    }

    render(){
        console.log(this.props.genres);
        
        return (
            <div className="Movie">
                
                <div className="Movie__Column">
                <MoviePoster poster = {this.props.poster} alt={this.props.title} />
                </div>
                
                <div className="Movie__Column">
                    <h1> {this.props.title} </h1>
                    <div className="Movie__Genres">
                        {this.props.genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                    </div>
                    <LinesEllipsis className="Movie__Synopsis" text={this.props.synopsis} maxLine="3" ellipsis="..." trimRightBaseOn="letters" />
                </div>
                
            </div>
            
        )        
    }
}

class MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired,
        alt:PropTypes.string.isRequired
    }
    

    render(){
        return (
            <img className="Movie__Poster" src={this.props.poster} title={this.props.alt} alt={this.props.alt}/> 
        )
    }
}

class MovieGenre extends Component
{
    render(){
        console.log("MovieGenre");
        console.log(this.props.genre);
        return (
            <span className="Movie__Genre">{this.props.genre}</span>
        )
    }
}

export default Movie;