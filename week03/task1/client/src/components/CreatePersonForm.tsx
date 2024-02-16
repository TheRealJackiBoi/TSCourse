import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { PERSON_CREATE } from "../queries/mutations"
import { PERSONS_GET } from "../queries/queries"

const CreatePersonForm = () => {

  
  const [ personCreate ] = useMutation(PERSON_CREATE, {
    refetchQueries: [PERSONS_GET]
  });
  const [person, setPerson] = useState({ name: '', email: '', age: 0 });
  
  
  const handlePersonCreate = () => {
        personCreate({ variables: person });
    }

  return (
    <div>
        <h2>Add a person</h2>
          <input type="text" value={person.name} onChange={(e) => setPerson({...person, name: e.target.value})}/>
          <input type="text" value={person.email} onChange={(e) => setPerson({...person, email: e.target.value})}/>
          <input type="text" value={person.age} onChange={(e) => setPerson({...person, age: parseInt(e.target.value)})}/>
          <button onClick={handlePersonCreate}>Add Book</button>
    </div>
  )
}

export default CreatePersonForm
