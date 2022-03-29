export default {
    type: "document",
    name: "actor",
    title: "Actor",
    fields: [
      {
        type: "string",
        name: "full_name",
        title: "Actor",
        description: "add actor"
      },
      {
        type: "slug",
        name: "name",
        title: "actor_name",
        options: {
          source: "title",
          slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        },
        validation: (Rule) => Rule.required(),
      }]
    }