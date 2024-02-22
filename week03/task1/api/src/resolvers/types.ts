export type Person = { 
  id: string
  name: string 
  email: string 
  age?: number 
  address?: Address
}

export type Address = {
  id: string
  zip: number
  street: string
  houseNumber: string
  residents: Person[]  
}

export type AddressPersonIDs = {
  addressId: string
  personId: string
}