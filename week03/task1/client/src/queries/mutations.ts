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
      }
}
`;

export const ADDRESS_ADD_PERSON = gql`
mutation Mutation($addressId: ID!, $personId: ID!) {
  addressAddPerson(addressId: $addressId, personId: $personId) {
    id
    street
    zip
  }
}
`

export const PERSON_DELETE = gql`
  mutation Mutation($personRemoveId: ID!) {
    personRemove(id: $personRemoveId) {
      id
      name
    }
  }
`