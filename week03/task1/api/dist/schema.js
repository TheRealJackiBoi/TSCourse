import { GraphQLError } from "graphql";
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

    """
      Creates an address with generated id and without any residents, returns the address
    """
    addressCreate(zip: Int!, street: String!, houseNumber: String!): Address
    """
      Adds a person to an address given those id's
    """
    addressAddPerson(addressId: ID!, personId: ID!): Address
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
`;
const resolvers = {
    Query: {
        person: (parent, { id }, { persons }, info) => {
            return persons.find(person => person.id == id);
        },
        persons: (parent, args, { persons }, info) => {
            return persons;
        },
        address: (parent, { id }, { addresses }) => {
            return addresses.find(address => address.id == id);
        },
        addresses: (parent, args, { addresses }) => {
            return addresses;
        }
    },
    Address: {
        residents: (parent, args, { persons }) => {
            return persons.filter(person => person.address ? person.address.id == parent.id : false);
        }
    },
    Mutation: {
        personCreate: (parent, { name, email, age }, { persons }) => {
            const person = {
                id: String(persons.length + 1),
                name: name,
                email: email,
                age: age
            };
            persons.push(person);
            return person;
        },
        addressCreate: (parent, { zip, street, houseNumber }, { addresses }) => {
            const address = {
                id: String(addresses.length + 1),
                zip: zip,
                street: street,
                houseNumber: houseNumber,
                residents: []
            };
            addresses.push(address);
            return address;
        },
        addressAddPerson: (parent, { addressId, personId }, { persons, addresses }) => {
            const person = persons.find(person => person.id == personId);
            if (!person) {
                throw new GraphQLError("Person not found");
            }
            const addressToChange = addresses.find(address => address.id == addressId);
            if (!addressToChange) {
                throw new GraphQLError("Address not found");
            }
            if (addressToChange.residents.find(resident => resident.id == person.id)) {
                throw new GraphQLError("User is already a resident");
            }
            addressToChange.residents.push(person);
            person.address = addressToChange;
            return addressToChange;
        }
    }
};
export { typeDefs, resolvers };
