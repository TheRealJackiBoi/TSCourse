import { useQuery, gql } from '@apollo/client';


const PERSON_GET = gql`
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

const PersonDetail = ({ personId }: { personId: string }) => {

    const { loading, error, data } = useQuery(PERSON_GET, {
        variables: { personId }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <h1>Person Detail</h1>
            {
                data.person && (
                    <div>
                        <h2>{data.person.name}</h2>
                        <p>{data.person.email}</p>
                        <p>{data.person.age}</p>
                        <p>{data.person.address.street} {data.person.address.houseNumber}</p>
                        <p>{data.person.address.zip}</p>
                    </div>
                )
            }
        </div>
    )
}

export default PersonDetail;