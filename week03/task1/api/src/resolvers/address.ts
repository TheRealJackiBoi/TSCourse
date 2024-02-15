import { Address, Person } from "./types"
import { MyContext } from "../server"

export const AddressResolver = {

    residents: (parent: Address, args: never, { persons }: MyContext) => {
      return persons.filter( person => person.address ? person.address!.id == parent.id : false)
    }
  }