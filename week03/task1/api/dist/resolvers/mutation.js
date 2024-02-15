import { GraphQLError } from "graphql";
export const Mutation = {
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
        if (addressToChange.residents.find((resident) => resident.id == person.id)) {
            throw new GraphQLError("User is already a resident");
        }
        addressToChange.residents.push(person);
        person.address = addressToChange;
        return addressToChange;
    },
    personRemove: (parent, { id }, { persons, addresses }) => {
        const index = persons.findIndex(p => p.id == id);
        const person = persons.find(p => p.id == id);
        if (index === -1) {
            throw new GraphQLError("Couldn't find person to delete");
        }
        if (person.address) {
            const addressToChange = addresses.find(address => address.id == person.address.id);
            if (addressToChange) {
                const indexToRemove = addressToChange.residents.findIndex(p => p.id == id);
                if (indexToRemove) {
                    addressToChange.residents.splice(indexToRemove, 1);
                }
            }
        }
        persons.splice(index, 1);
        return person;
    },
    addressRemoveResident: (parent, { addressId, personId }, { persons, addresses }) => {
        const address = addresses.find(a => a.id == addressId);
        const person = persons.find(p => p.id == personId);
        if (!address) {
            throw new GraphQLError("Couldn't find address");
        }
        if (!person) {
            throw new GraphQLError("Couldn't find person");
        }
        const index = address.residents.findIndex(p => p.id == personId);
        if (index === -1) {
            throw new GraphQLError("Person not found in address");
        }
        address.residents.splice(index, 1);
        person.address = undefined;
        return person;
    }
};
