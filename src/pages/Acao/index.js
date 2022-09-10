import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Movies, ListaFims } from "./style";
import { apiKey } from "../../config/key";

export function Acao(){
    const [movies,setMovies]= useState([])
    const img_path= 'https://image.tmdb.org/t/p/w500'
    useEffect(()=>{
        
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
         .then(response => response.json())
            .then(data =>{
                console.log(data.results) 
                const filmes = [data.results[0],data.results[2],data.results[3]]

                          
            setMovies(filmes)})
    }, [])

    
    return (
        <Movies>
        
            {movies.map(movie => {
                   
                    return(
                        
                    <ListaFims key={movie.id}>
                        <Link to={`/details/${movie.id}`}>
                            <img src={`${img_path}${movie.poster_path}`} alt="filme"/>
                        </ Link>
                        <span>{movie.title}</span>
                    </ListaFims>
                    )

                })}
        
    </Movies>
    );
}