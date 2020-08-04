const { gql } = require('apollo-server-express');

module.exports = gql`
    type User {
        id: String
        name: String
        email: String
        password: String
        bio: String
        mobile: String
        username: String
        plan: String
        active: Boolean
        Type: String
        date_created: String
        date_updated: String
        boards : [Board]
    },
    type Board {
        id: String
        name: String
        category: String
        tags: String
        pins: [Pin]
        created_at: String
        updated_at: String
    },
    type Pin {
        id: String
        name: String
        description: String
        url: String
        image: String
        category: String
        tags: String
        created_at: String
        updated_at: String
    },
    type Query {
    boards: [Board]
  }
`;
