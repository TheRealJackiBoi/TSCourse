import { ADDRESS_CREATE } from "../queries/mutations"
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { ADDRESSES_GET } from "../queries/queries";

const CreateAddressForm = () => {
  const [ addressCreate ] = useMutation(ADDRESS_CREATE, {
    refetchQueries: [ADDRESSES_GET]
  });
  const [address, setAddress] = useState({ zip: 0, street: '', houseNumber: '' });

  const handleAddressCreate = () => {
        addressCreate({ variables: address });
        setAddress({ zip: 0, street: '', houseNumber: '' });
    }

  return (
    <div className='w-2/3 mx-auto text-center bg-slate-800 p-4 rounded m-4 flex flex-col' >
        <h2 className="text-2xl ">Add an address</h2>
          <input className="my-2 w-3/4 mx-auto text-black pl-2" type="number" value={address.zip} placeholder="2605" onChange={(e) => setAddress({...address, zip: parseInt(e.target.value)})}/>
          <input className="my-2 w-3/4 mx-auto text-black pl-2" type="text" value={address.street} placeholder="Rytterdammen" onChange={(e) => setAddress({...address, street: e.target.value})}/>
          <input className="my-2 w-3/4 mx-auto text-black pl-2" type="text" value={address.houseNumber} placeholder="14" onChange={(e) => setAddress({...address, houseNumber: e.target.value})}/>
          <button className="active:opacity-[0.85]  bg-teal-500 w-fit p-2 mx-auto my-2 rounded" onClick={handleAddressCreate}>Add address</button>
    </div>
  )
}

export default CreateAddressForm