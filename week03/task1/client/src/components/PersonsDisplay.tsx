import { Person } from '../types'
import { useQuery } from '@apollo/client'
import { PERSONS_GET } from '../queries/queries'

const PersonsDisplay = ({ setPersonId }: { setPersonId: React.Dispatch<React.SetStateAction<string>>}) => {
  const { loading, error, data } = useQuery(PERSONS_GET);
  


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className=' w-2/3 mx-auto text-center bg-slate-800 p-4 rounded '>
      <h1 className=' text-2xl mb-2 '>Persons</h1>
      {data.persons.map((person: Person) => (
        <div key={person.id} onClick={() => setPersonId( person.id )} className='text-left m-2 ml-0'>
          {person.email} 
        </div>
      ))}
    </div>
  )
}

export default PersonsDisplay