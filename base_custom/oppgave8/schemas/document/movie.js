export default {
    type: "document",
    name: "movie",
    title: "All_Movies",
    fields: [
      {
        type: "string",
        name: "title",
        title: "Movie",
        description: "Movies to add"
      },
      {
        type: "reference",
        name: "actor",
        to: [{type:"actor"}],
        title: "Movie Actor",
      },
    ],
  }

