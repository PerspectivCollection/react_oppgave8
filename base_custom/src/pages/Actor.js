import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getActorsMovies } from "../lib/services/movieService"

export default function Actor() {
    const { name } = useParams()
    const [movies_actor, setActor] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const data = await getActorsMovies()
            setActor(data)
        }
        getMovies()
    }, [])

    return (<>
        <h1> About:</h1>
        {name}
        <h1> Movies:</h1>
         <ul className="mt-4 list-inside list-disc">
            {movies_actor?.map((movies) => (
                <li key={movies._id} className="mt-4 list-inside list-disc">
                {movies.relatedMovies}
                </li>
            ))}
        </ul> 
        {JSON.stringify.movies_actor}
    </>
    )
}