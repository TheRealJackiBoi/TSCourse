export const Query = {
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
    },
    addressesByZip: (parent, { zip }, { addresses }) => {
        return addresses.filter(address => address.zip == zip);
    }
};
