import { useState } from 'react';
import './App.css'
import { useQuery, gql, useMutation } from '@apollo/client';
import PersonDetail from './PersonDetail';


type Person = {
  id: string;
  name: string;
  email: string;
  age: number;
  address?: Address | null;
};

type Address = {
  id?: string
  street: string
  houseNumber: string
  zip: number | null
  residents?: Person[]
}



const PERSONS_GET = gql`
    query Query {
      persons {
        age
        email
        id
        name
      }
    }
`;

const PERSON_CREATE = gql`
  mutation Mutation($name: String!, $email: String!, $age: Int) {
    personCreate(name: $name, email: $email, age: $age) {
      age
      email
      id
      name
    }
  }
`

const ADDRESS_CREATE = gql`
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


function App() {
  const [personId, setPersonId] = useState('');

  const [ addressCreate ] = useMutation(ADDRESS_CREATE);
  const [address, setAddress] = useState({ zip: -1, street: '', houseNumber: '' });

  const [ personCreate ] = useMutation(PERSON_CREATE, {
    refetchQueries: [PERSONS_GET]
  });
  const [person, setPerson] = useState({ name: '', email: '', age: 0 });

  const { loading, error, data } = useQuery(PERSONS_GET);

  const handleAddressCreate = () => {
        addressCreate({ variables: address });
    }
  
  const handlePersonCreate = () => {
        personCreate({ variables: person });
    }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <div>
        {data.persons.map((person: Person) => (
          <div key={person.id} onClick={() => setPersonId( person.id )}>{person.email} </div>
        ))}
      </div>

      {
        personId && <PersonDetail personId={personId} />
      }

      <div>
          <h2>Add an address</h2>
            <input type="text" value={address.zip} onChange={(e) => setAddress({...address, zip: parseInt(e.target.value)})}/>
            <input type="text" value={address.street} onChange={(e) => setAddress({...address, street: e.target.value})}/>
            <input type="text" value={address.houseNumber} onChange={(e) => setAddress({...address, houseNumber: e.target.value})}/>
            <button onClick={handleAddressCreate}>Add Book</button>
      </div>
      <div>
          <h2>Add a person</h2>
            <input type="text" value={person.name} onChange={(e) => setPerson({...person, name: e.target.value})}/>
            <input type="text" value={person.email} onChange={(e) => setPerson({...person, email: e.target.value})}/>
            <input type="text" value={person.age} onChange={(e) => setPerson({...person, age: parseInt(e.target.value)})}/>
            <button onClick={handlePersonCreate}>Add Book</button>
      </div>

    </>
  );
}

export default App
