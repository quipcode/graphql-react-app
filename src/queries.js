import { gql } from '@apollo/client';

// export const GET_USERS = gql`
//   query {
//     users {
//       id
//       name
//       email
//     // Add other fields you need
//     }
//   }
// `

export const GET_COUNTRIES = gql`
query {
  countries{
    code
    name
  }
}
`