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
        setPerson({ name: '', email: '', age: 0 });
    }

  return (
    <div className='w-2/3 mx-auto text-center bg-slate-800 p-4 rounded m-4 flex flex-col' >
        <h2>Add a person</h2>
          <input className="my-2 w-3/4 mx-auto px-2 text-black" type="text" value={person.name} placeholder='Name' onChange={(e) => setPerson({...person, name: e.target.value})}/>
          <input className="my-2 w-3/4 mx-auto px-2 text-black" type="text" value={person.email} placeholder='Email' onChange={(e) => setPerson({...person, email: e.target.value})}/>
          <input className="my-2 w-3/4 mx-auto px-2 text-black" type="number" value={person.age} placeholder='0' onChange={(e) => setPerson({...person, age: parseInt(e.target.value)})}/>
          <button className="active:opacity-[0.85]  bg-teal-500 w-fit p-2 mx-auto my-2 rounded" onClick={handlePersonCreate}>Add Person</button>
    </div>
  )
}

export default CreatePersonForm
