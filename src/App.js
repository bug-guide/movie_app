import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './movie.js';

class App extends Component {

  state = {
    // greeting:"hello?",
    // movies: [
    //   {
    //     title: "matrix",
    //     poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
    //   },
    //   {
    //     title: "full metal jacket",
    //     poster: "http://image.cine21.com/cine21/poster/2005/0607/M0010102_.jpg"
    //   },
    //   {
    //     title: "oldboy",
    //     poster: "http://image.cine21.com/cine21/poster/2013/1114/10_42_00__52842a68c7fda.jpg"
    //   },
    //   {
    //     title: "star wars",
    //     poster: "http://www.thebling.co.kr/wp-content/uploads/2015/11/movie_image-4.jpg"
    //   },
    //   {
    //     title: "transformer",
    //     poster:"http://img.tenasia.hankyung.com/webwp_kr/wp-content/uploads/2017/06/2017062110330913211-540x278.jpg"
    //   }
    // ]
    
  }
 
  componentWillMount() {

  }

  componentDidMount(){
    // setTimeout(()=> {
    //   console.log('timeout');
    //   // 사용하면 안되는 방식.
    //   // this.state.greeting = "???";

    //   // state세팅은 항상 setter를 통한다.
    //   // this.setState({
    //   //   greeting:"????"
    //   // })

    //   // this.setState({
    //   //   // ...this.state.movies
    //   //   movies:[
    //   //     {
    //   //       title:"transformer",
    //   //       poster:"http://img.tenasia.hankyung.com/webwp_kr/wp-content/uploads/2017/06/2017062110330913211-540x278.jpg"
    //   //     },
    //   //     ...this.state.movies
    //   //   ]
    //   // })

    //   // this.setState({
    //   //   movies: [
    //   //     {
    //   //       title: "matrix",
    //   //       poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
    //   //     },
    //   //     {
    //   //       title: "full metal jacket",
    //   //       poster: "http://image.cine21.com/cine21/poster/2005/0607/M0010102_.jpg"
    //   //     },
    //   //     {
    //   //       title: "oldboy",
    //   //       poster: "http://image.cine21.com/cine21/poster/2013/1114/10_42_00__52842a68c7fda.jpg"
    //   //     },
    //   //     {
    //   //       title: "star wars",
    //   //       poster: "http://www.thebling.co.kr/wp-content/uploads/2015/11/movie_image-4.jpg"
    //   //     },
    //   //     {
    //   //       title: "transformer",
    //   //       poster: "http://img.tenasia.hankyung.com/webwp_kr/wp-content/uploads/2017/06/2017062110330913211-540x278.jpg"
    //   //     }
    //   //   ]
    //   // })
      
    //   console.log(this.state.movies);
    // }, 1000)

    this._getMovies();
  }

  _renderMovies = () => {
    console.log("_renderMovies");
    
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} genres={movie.genres} synopsis={movie.synopsis}/>
    })

    return movies
  }

  // async 는 이 함수가 결과가 날때까지 기다리지 않게한다.
  _getMovies = async () => {
    // await 는 해당 값이 리턴되기 전까지 아래 코드를 실행하지 않는다.
    const movies = await this._callApi()
    console.log("await end");
     
    this.setState({
      movies
    })
  }

  _callApi = () => {
    //컴포넌트가 마운트될떄 해당 url의 페이지를 가저온다.
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(json)
        return json.data.movies
      })
      .catch(error => console.log(error))
  }

  render() {
    return ( 
      <div className={this.state.movies ? "App" : "App--loading"}>
       
        {/* <Movie title = {movies[0].title} poster = {movies[0].poster}/>
        <Movie title = {movies[1].title} poster = {movies[1].poster}/>
        <Movie title = {movies[2].title} poster = {movies[2].poster}/>
        <Movie title = {movies[3].title} poster = {movies[3].poster}/> */}

        {/* map 사용법. */}
        
        {/* {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })} */}

        {this.state.movies ? this._renderMovies() : "loading..."}
        
      </div>
    );
  }
}

export default App;
