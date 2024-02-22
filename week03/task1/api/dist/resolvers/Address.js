export const AddressResolver = {
    residents: (parent, args, { persons }) => {
        return persons.filter(person => person.address ? person.address.id == parent.id : false);
    }
};
