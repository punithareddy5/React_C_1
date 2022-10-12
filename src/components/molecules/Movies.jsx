import React from "react";
import Card from './Card';



const Movies = ( props ) => {
const {movies} = props
      return (
      <div className="App" style={{display: "grid",height:"auto",gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", rowGap: "5px", columnGap: "10px"}}>          
        { movies.length? movies.map((movie) => <Card key={movie.id} {...movie}  />
          ) : null}
        
      </div>
    )
  }

  export default Movies;