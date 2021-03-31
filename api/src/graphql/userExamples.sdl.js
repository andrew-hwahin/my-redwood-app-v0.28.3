export const schema = gql`
  type UserExample {
    id: Int!
    email: String!
    name: String
    birthday: DateTime
  }

  type Query {
    userExamples: [UserExample!]!
    userExample(id: Int!): UserExample
  }

  input CreateUserExampleInput {
    email: String!
    name: String
    birthday: DateTime
  }

  input UpdateUserExampleInput {
    email: String
    name: String
    birthday: DateTime
  }

  type Mutation {
    createUserExample(input: CreateUserExampleInput!): UserExample!
    updateUserExample(id: Int!, input: UpdateUserExampleInput!): UserExample!
    deleteUserExample(id: Int!): UserExample!
  }
`
