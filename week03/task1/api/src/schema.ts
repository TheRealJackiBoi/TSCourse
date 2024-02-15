const typeDefs = `#graphql
  type Query {
    """ 
      Returns a person found by id 
    """
    person(id: ID!): Person     
    """
      Returns a list of persons
    """
    persons: [Person]
    """
      Returns an address by id 
    """    
    address(id: ID!): Address
    """
      Returns a list of addresses
    """
    addresses: [Address]
    """
      Returns addresses by zipcode
    """
    addressesByZip(zipcode: Int!): [Address]
  } 

  type Mutation {
    """
      Creates a person with generated id and Returns person
    """
    personCreate(name: String!, email: String!, age: Int): Person

    """
      Creates an address with generated id and without any residents, returns the address
    """
    addressCreate(zip: Int!, street: String!, houseNumber: String!): Address
    """
      Adds a person to an address given those id's
    """
    addressAddPerson(addressId: ID!, personId: ID!): Address
    """
      Removes a person
    """
    personRemove(id: ID!): Person
    """
      Removes a person from an address and removes the persons address
    """
    addressRemoveResident(addressId: ID!, personId: ID!): Person
  }

  type Person {
    id: ID!
    name: String!
    email: String!
    age: Int
    address: Address
  }

  type Address {
    id: ID!
    zip: Int!
    street: String!
    houseNumber: String!
    residents: [Person!]!  
  }
`





export { typeDefs }