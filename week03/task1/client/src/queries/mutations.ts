import { gql } from '@apollo/client';

export const PERSON_CREATE = gql`
  mutation Mutation($name: String!, $email: String!, $age: Int) {
    personCreate(name: $name, email: $email, age: $age) {
      age
      email
      id
      name
    }
  }
`

export const ADDRESS_CREATE = gql`
mutation Mutation(
  $zip: Int!, 
  $street: String!, 
  $houseNumber: String!
  ) { 
    addressCreate(
      zip: $zip, 
      street: $street, 
      houseNumber: $houseNumber
      ) {
        houseNumber
        id
        street
        zip
        residents {
          age
          id
          email
          name
        }
      }
}
`;