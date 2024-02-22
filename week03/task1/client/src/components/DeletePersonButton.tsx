import { PERSON_DELETE } from "../queries/mutations";
import { PERSONS_GET } from "../queries/queries";
import { useMutation } from "@apollo/client";


const DeletePersonButton = ({ id }: { id: string }) => {
  const [personDelete] = useMutation(PERSON_DELETE, {
    refetchQueries: [PERSONS_GET]
  });

  const handleDelete = () => {
    personDelete({ variables: { personRemoveId: id } })
  }

  return (
    <button onClick={handleDelete} className="active:opacity-[0.85] inline bg-red-500 w-fit px-2 py-1 mx-auto my-2 rounded text-white"> X </button>
  )
}

export default DeletePersonButton