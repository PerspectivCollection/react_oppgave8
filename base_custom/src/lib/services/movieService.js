import client from "../client"

const movieService = `
title,
"actor": actor->name.current
`

const actorService = `
_id,
title,
name,
full_name,
"slug": full_name.current,
`

export const getAllMovies = async ()=> {
    const data = await client.fetch(`*[_type == "movie"]{${movieService}}`)
    return data
}

export const getMovieActors = async (name) => {
    const data = await client.fetch(`*[_type == "movie" && name.current == $name]{${movieService}}`,
    { name }
    )
    return data
  }

export const getAllActors = async () => {
    const data = await client.fetch(`*[_type == "actor"]{${actorService}}`,
    )
    return data
  }
export const getActorsMovies = async () => {
    const data = await client.fetch(`*[_type=="actor"]{"relatedMovies":*[_type=='movie' && references(^._id)]{ 
      }{${actorService}}`,
    )
    return data
  }
