import { useEffect, useState } from "react"
import { getAllMovies } from "../lib/services/movieService"
import Movie from "./Movie"
import { Link } from "react-router-dom";

export default function Movies() {
    const [info, setInfo] = useState([])

    
    const getAllMoviesData = async () => {
        const data = await getAllMovies([])
        setInfo(data)
        console.log(info)
    }


    useEffect(() => {
        getAllMoviesData()
    }, [])

    return (
        <>
            <div>
                <h1> filmer: </h1>
                {/* {info?.map((movie) => (
                 <Movie key={movie._key} title={movie.title} actor={movie.actor}/> 
                ))} */}
                <ul>
                    {info.map((movie) => (
                        <li key={movie._id}>
                            <Movie title={movie.title} actor={movie.actor}> </Movie>
                        </li>
                    ))}
                </ul>

                <ul className="mt-4 list-inside list-disc" >
                    <li className="mt-4 list-inside list-disc border-2">
                        <Link to={`/actors`}>to actors</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}