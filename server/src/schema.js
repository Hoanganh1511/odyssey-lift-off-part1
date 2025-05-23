const gql = require("graphql-tag");
// gql - it's a tagged template literal, used for wrapping GraphQL strings like the schema definition we're about to write

const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!

    spaceCats: [SpaceCat]
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "THe number of modules this track contains"
    modulesCount: Int
  }
  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
  type SpaceCat {
    id: ID!
    name: String!
    age: Int
    missions: [Mission]
  }
  type Mission {
    id: ID!
    name: String!
    description: String!
  }
`;
module.exports = typeDefs;
