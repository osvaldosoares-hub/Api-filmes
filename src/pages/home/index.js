import { Container, ListaFims, Movies } from "./styles";
import { useState ,useEffect } from "react";
import { apiKey } from "../../config/key";
import { Link } from "react-router-dom";

export function Home(){
    
    const [movies,setMovies]= useState([])
    const img_path= 'https://image.tmdb.org/t/p/w500'
    useEffect(()=>{
        
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
         .then(response => response.json())
            .then(data =>{
                console.log(data) 
                                  
                setMovies(data.results)})
    }, [])

    return (
        <Container> 
        <h1>movies</h1>
        <div>
                    <Link to={`/acao`}>
                    <h1>Filme de Ação</h1>
                    </ Link>
                </div>
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

        </Container>
    )
}