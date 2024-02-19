import { useQuery } from "@apollo/client";
import { PERSONS_GET } from "../queries/queries";
import axios from 'axios';
import { Person } from "../types";


const AvatarUpload = () => {

  const { loading, error, data } = useQuery(PERSONS_GET);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    
    const personId = formData.get('personid');
    const file = formData.get('file') as File;
    
    if ( file!.type !== 'image/jpeg') {
      return alert('Only jpg files are allowed')
    }

    const res = await axios.post(`http://localhost:4000/upload/${personId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

  
    if (res.status === 200) {
      alert('File uploaded successfully')
    }
    else {
      alert('File upload failed')
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <form method="post" onSubmit={handleSubmit} className="w-2/3 mx-auto text-center bg-slate-800 p-4 rounded">
      <select name="personid">
        {
            data.persons.map((person: Person) => (
              <option key={person.id} value={person.id}>{person.email}</option>
            ))
        }
      </select>
      <input type="file" name="file" accept="image/jpg" />
      <button type="submit" className="active:opacity-[0.85] inline bg-teal-500 w-fit p-2 mx-auto my-2 rounded text-white">Upload</button>
    </form>
  )
}

export default AvatarUpload;
