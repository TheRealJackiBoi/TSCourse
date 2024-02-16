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
        <div className='w-2/3 mx-auto text-center bg-slate-800 p-4 rounded m-4 '>
            <h1 className='text-2xl'>Person Detail</h1>
            {
                data.person && (
                    <div className='text-left'>
                        <h2 className='text-xl'>{data.person.name}: </h2>
                        <div className='ml-4'>
                            <p>{data.person.email}</p>
                            <p>{data.person.age}</p>
                            {data.person.address && (
                                <>
                                    <p>{data.person.address.street} {data.person.address.houseNumber}</p>
                                    <p>{data.person.address.zip}</p>
                                </>
                            )}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default PersonDetail;