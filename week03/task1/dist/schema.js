export {};
/*

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
  }

  type Mutation {
    """
      Creates a person with generated id and Returns person
    """
    personCreate(name: String!, email: String!, age: Int): Person
    addressCreate(zip: Int!, street: String!, houseNumber: String!): Address
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

type Person = {
  id: string
  name: string
  email: string
  age?: number
  address?: Address
}

type Address = {
  id: string
  zip: number
  street: string
  houseNumber: string
  residents: Person[]
}

const resolvers = {
  Query: {
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
    }
  },

  Address: {

    residents: (parent: Address, args: never, { persons }: MyContext) => {
      return persons.filter( person => person.address ? person.address!.id == parent.id : false)
    }
  },

  Mutation: {
    personCreate: (parent: never, { name, email, age}: Person, { persons }: MyContext ) => {
      const person: Person = {
        id: String(persons.length + 1),
        name: name,
        email: email,
        age: age
      }
    persons.push(person)
    return person
    },
  addressCreate: (parent: never, { zip, street, houseNumber}: Address, { addresses }: MyContext) => {
    const address = {
      id: String(addresses.length + 1),
      zip: zip,
      street: street,
      houseNumber: houseNumber,
      residents: []
    }
    addresses.push(address)
    return address
  }
  }
}

export { typeDefs, resolvers, Person, Address} 
