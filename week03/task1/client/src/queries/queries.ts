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
`;