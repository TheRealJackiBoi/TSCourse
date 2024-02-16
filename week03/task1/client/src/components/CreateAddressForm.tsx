import { ADDRESS_CREATE } from "../queries/mutations"
import { useMutation } from '@apollo/client';
import { useState } from 'react';

const CreateAddressForm = () => {
  const [ addressCreate ] = useMutation(ADDRESS_CREATE);
  const [address, setAddress] = useState({ zip: -1, street: '', houseNumber: '' });

  const handleAddressCreate = () => {
        addressCreate({ variables: address });
    }

  return (
    <div>
        <h2>Add an address</h2>
          <input type="text" value={address.zip} onChange={(e) => setAddress({...address, zip: parseInt(e.target.value)})}/>
          <input type="text" value={address.street} onChange={(e) => setAddress({...address, street: e.target.value})}/>
          <input type="text" value={address.houseNumber} onChange={(e) => setAddress({...address, houseNumber: e.target.value})}/>
          <button onClick={handleAddressCreate}>Add Book</button>
    </div>
  )
}

export default CreateAddressForm