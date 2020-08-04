const { gql } = require('apollo-server');

module.exports = gql`
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
    }
`;
