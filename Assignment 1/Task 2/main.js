const users = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        contact: {
            email: "john.doe@example.com",
            phone: "123-456-7890",
            address: {
                street: "123 Main St",
                city: "Anytown",
                state: "CA",
                zip: "12345",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/johndoe",
                twitter: "https://twitter.com/johndoe",
                linkedIn: "https://www.linkedin.com/in/johndoe"
            }
        }
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        contact: {
            email: "jane.smith@example.com",
            phone: "234-567-8901",
            address: {
                street: "456 Oak St",
                city: "Othertown",
                state: "TX",
                zip: "67890",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/janesmith",
                twitter: "https://twitter.com/janesmith",
                linkedIn: "https://www.linkedin.com/in/janesmith"
            }
        }
    },
    {
        id: 3,
        firstName: "Alice",
        lastName: "Johnson",
        contact: {
            email: "alice.johnson@example.com",
            phone: "345-678-9012",
            address: {
                street: "789 Pine St",
                city: "Thistown",
                state: "FL",
                zip: "34567",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/alicejohnson",
                twitter: "https://twitter.com/alicejohnson",
                linkedIn: "https://www.linkedin.com/in/alicejohnson"
            }
        }
    },
    {
        id: 4,
        firstName: "Bob",
        lastName: "Brown",
        contact: {
            email: "bob.brown@example.com",
            phone: "456-789-0123",
            address: {
                street: "101 Maple St",
                city: "Yourtown",
                state: "NY",
                zip: "45678",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/bobbrown",
                twitter: "https://twitter.com/bobbrown",
                linkedIn: "https://www.linkedin.com/in/bobbrown"
            }
        }
    },
    {
        id: 5,
        firstName: "Charlie",
        lastName: "Davis",
        contact: {
            email: "charlie.davis@example.com",
            phone: "567-890-1234",
            address: {
                street: "202 Cedar St",
                city: "Mytown",
                state: "WA",
                zip: "56789",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/charliedavis",
                twitter: "https://twitter.com/charliedavis",
                linkedIn: "https://www.linkedin.com/in/charliedavis"
            }
        }
    },
    {
        id: 6,
        firstName: "Diana",
        lastName: "Evans",
        contact: {
            email: "diana.evans@example.com",
            phone: "678-901-2345",
            address: {
                street: "303 Birch St",
                city: "Hertown",
                state: "CO",
                zip: "67890",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/dianaevans",
                twitter: "https://twitter.com/dianaevans",
                linkedIn: "https://www.linkedin.com/in/dianaevans"
            }
        }
    },
    {
        id: 7,
        firstName: "Evan",
        lastName: "Frank",
        contact: {
            email: "evan.frank@example.com",
            phone: "789-012-3456",
            address: {
                street: "404 Elm St",
                city: "Thistown",
                state: "OH",
                zip: "78901",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/evanfrank",
                twitter: "https://twitter.com/evanfrank",
                linkedIn: "https://www.linkedin.com/in/evanfrank"
            }
        }
    },
    {
        id: 8,
        firstName: "Fiona",
        lastName: "Garcia",
        contact: {
            email: "fiona.garcia@example.com",
            phone: "890-123-4567",
            address: {
                street: "505 Spruce St",
                city: "Yourtown",
                state: "MA",
                zip: "89012",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/fionagarcia",
                twitter: "https://twitter.com/fionagarcia",
                linkedIn: "https://www.linkedin.com/in/fionagarcia"
            }
        }
    },
    {
        id: 9,
        firstName: "George",
        lastName: "Harris",
        contact: {
            email: "george.harris@example.com",
            phone: "901-234-5678",
            address: {
                street: "606 Aspen St",
                city: "Mytown",
                state: "IL",
                zip: "90123",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/georgeharris",
                twitter: "https://twitter.com/georgeharris",
                linkedIn: "https://www.linkedin.com/in/georgeharris"
            }
        }
    },
    {
        id: 10,
        firstName: "Hannah",
        lastName: "Ivers",
        contact: {
            email: "hannah.ivers@example.com",
            phone: "012-345-6789",
            address: {
                street: "707 Willow St",
                city: "Thistown",
                state: "GA",
                zip: "01234",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/hannahivers",
                twitter: "https://twitter.com/hannahivers",
                linkedIn: "https://www.linkedin.com/in/hannahivers"
            }
        }
    }
];



function createTable(users) {
    const tableBody = document.querySelector('#userTable tbody');
    users.forEach(user => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.contact.email}</td>
            <td>${user.contact.phone}</td>
            <td>${user.contact.address.street}</td>
            <td>${user.contact.address.city}</td>
            <td>${user.contact.address.state}</td>
            <td>${user.contact.address.zip}</td>
            <td>${user.contact.address.country}</td>
            <td><a href="${user.contact.social.facebook}" target="_blank">Facebook</a></td>
            <td><a href="${user.contact.social.twitter}" target="_blank">Twitter</a></td>
            <td><a href="${user.contact.social.linkedIn}" target="_blank">LinkedIn</a></td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Initialize the table with user data
createTable(users);
