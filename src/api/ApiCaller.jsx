import consts from '../utils/consts.json';


  const getNowPlaying = async () => {
    const endpoint = `https://api.themoviedb.org/3/movie/${consts.api.nowPlaying}?api_key=${consts.apiKey}&language=en-US&page=1`
    const response = await fetch(endpoint)
    const data = await response.json()
    return data;
  }

  const parseMoviesData = (movie) => {
    const { title, overview, release_date,poster_path,vote_average,id} = movie;
   // const { title, overview, release_date,poster_path,vote_average,id} = movie;
        return { 
        title,
        overview, 
        release_date,
        image : 'https://image.tmdb.org/t/p/w500/'+poster_path,
        vote_average,
        id
        } 
    }


export default {getNowPlaying,parseMoviesData };