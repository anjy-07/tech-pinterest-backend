const { gql } = require('apollo-server');

module.exports = gql`
    type Board {
        id: String
        name: String
        category: String
        tags: String
        pins: [Pin]
        created_at: String
        updated_at: String
    }
`;
