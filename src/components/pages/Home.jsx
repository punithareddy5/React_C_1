import React, { useEffect, useState } from 'react';
import Template from '../templates/Template';
import ApiCaller from "../../api/ApiCaller";

const Home = () => {  
	const [state,setState] = useState({
        movies : []
      });
      const [searchTerm, setSearchTerm] = useState('');
      const [searchResults, setSearchResults] = useState({
        movies:[]
      });
      const { movies } = state; 


	  const retrieveMovies = async () => {
      const moviesData = await ApiCaller.getNowPlaying();
      const results = moviesData.results;
      const movies = results.slice(0,10).map(ApiCaller.parseMoviesData);
      setState({ ...state, movies:[...movies] })
    }
	useEffect(() => {
		retrieveMovies();  
	}, []);

	const onUserSearch  = (searchTerm) => {
		setSearchTerm(searchTerm);
        if(searchTerm !== "") {
            const newPlayList = movies.filter((movie) =>{
                return Object.values(movie)
                .join(" ")
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            });
            return setSearchResults({ ...state, movies: newPlayList });
        } else {
            return setSearchResults({ ...state, movies: movies });
        }
	}
  
	return (
	<Template onUserSearch={onUserSearch} searchTerm={searchTerm} movies={movies} searchResults={searchResults} />
	)
} 
export default Home;