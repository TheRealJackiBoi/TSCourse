import { Address } from "../types";
import { ADDRESS_ADD_PERSON } from "../queries/mutations";
import { useMutation, useQuery } from "@apollo/client";
import { useRef } from "react";
import { ADDRESSES_GET, PERSONS_GET, PERSON_GET } from "../queries/queries";

const ChangePersonAddress = ({ id, currAddress}: {id: string, currAddress: Address}) => {
  const addressIdRef = useRef(currAddress.id ? currAddress.id : "0");

  const [ addressAddPerson ] = useMutation(ADDRESS_ADD_PERSON, {
    refetchQueries: [PERSONS_GET, PERSON_GET, ADDRESSES_GET]
  });
  const { loading, error, data } = useQuery(ADDRESSES_GET)


  const handleSubmit = () => {
    addressAddPerson({ variables: { addressId: parseInt(addressIdRef.current.value), personId: id }})
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
      <div className="text-black mt-4">
        <label htmlFor="addressId" className="mr-2 text-white font-bold block">Change address</label>
        <select className="p-1 mr-2 inline rounded" name="addressId" id="addressId" ref={addressIdRef} >
          {
            data.addresses.map((address: Address) => (
              <option key={address.id} value={address.id}>{address.street} {address.houseNumber}, zip: {address.zip}</option>
            ))
          }
        </select>
        <button onClick={handleSubmit} className="active:opacity-[0.85] inline bg-teal-500 w-fit p-2 mx-auto my-2 rounded text-white">Set address</button>
    </div>
  )
}
  
export default ChangePersonAddress;