const { gql } = require('apollo-server');

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
    }
`;
