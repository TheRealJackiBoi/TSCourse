import { gql } from '@apollo/client';


export const PERSONS_GET = gql`
    query Query {
      persons {
        age
        email
        id
        name
      }
    }
`

export const PERSON_GET = gql`
  query Query($personId: ID!) {
  person(id: $personId) {
    address {
      houseNumber
      id
      street
      zip
    }
    age
    email
    id
    name
  }
}
`

export const ADDRESSES_GET = gql`
  query Query {
    addresses {
      id
      houseNumber
      street
      zip
    }
  }
`