let People = [
    {
        id: "1",
        name: "Rahul",
        age: 21,
        gender: "Male",
    },
    {
        id: "2",
        name: "Kartik",
        age: 22,
        gender: "Male",
    },
    {
        id: "3",
        name: "Manu",
        age: 18,
        gender: "Female",
    },
    {
        id: "4",
        name: "Nitin",
        age: 28,
        gender: "Male",
    },
    {
        id: "5",
        name: "Jatin",
        age: 22,
        gender: "Male",
    },
    {
        id: "6",
        name: "Pooja",
        age: 17,
        gender: "Female",
    },
];

const resolver = {
    Query: {
        people: () => People,
        person: (_, args) => {
            const user = People.filter((person) => {
                return person.id === args.id;
            });
            return user[0];
        },
    },
    Mutation: {
        addPerson: (_, args) => {
            const newPerson = {
                id: `${People.length + 1}`,
                name: args.name,
                age: args.age,
                gender: args.gender,
            };

            People.push(newPerson);
            return newPerson;
        },
        deleteMutation: (_, args) => {
            const newPeopleArray = People.filter((person) => {
                return person.id != args.id;
            });

            if (People.length > newPeopleArray.length) {
                People = newPeopleArray;
                return true;
            }

            return false;
        },
    },
};

export default resolver;
