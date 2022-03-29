import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllActors } from "../lib/services/movieService"

export default function Actors() {
    const [info_actor, setActor] = useState([])

    useEffect(() => {
        const getActor = async () => {
            const data = await getAllActors()
            setActor(data)
        }
        getActor()
    }, [])

    return (<>
        <h1> alle actors </h1>

        <ul className="mt-4 list-inside list-disc">
            {info_actor?.map((some_actor) => (
                <li key={some_actor._id} className="mt-4 list-inside list-disc">
                    <Link to={`/actors/${some_actor.full_name}`}>{some_actor.full_name}</Link>
                </li>
            ))}
        </ul>
    </>
    )
}