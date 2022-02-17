let contacts = [
    {
        name: "Anders",
        email: "anders@microsoft.com",
        mobile: 3399432233,
        bio : 'Author of Turbo Pascal, Delphi, C# and TypeScript',
        image: 'anders.jpg'
    },
    {
        name: "James",
        email: "james@google.com",
        mobile: 9484848232,
        bio: 'Author of Java',
        image: 'james.jpg'
    },
    {
        name: "Rossum",
        email: "rossum@microsoft.com",
        mobile: 393882232,
        bio: 'Author of Python',
        image: 'rossum.jpg'
    },
] 


export function getContacts() {
    return contacts; 
}

export function getContact(name) {
    return contacts.find(
        c => c.name === name
    );
}