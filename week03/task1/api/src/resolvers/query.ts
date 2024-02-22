import { Person, Address } from './types'
import { MyContext } from '../server'

export const Query = {
    person: (parent: never, { id }: Person, { persons }: MyContext, info: never) => {
      return persons.find(person => person.id == id)
    },
    persons: (parent: never, args: never, { persons }: MyContext, info: never ) => {
      return persons
    },
    address: (parent: never, { id }: Address, { addresses }: MyContext) => {
      return addresses.find(address => address.id == id)
    },
    addresses: (parent: never, args: never, { addresses }: MyContext) => {
      return addresses
    },
    addressesByZip: (parent: never, { zip }: Address, { addresses }: MyContext) => {
      return addresses.filter(address => address.zip == zip)
    }
  }