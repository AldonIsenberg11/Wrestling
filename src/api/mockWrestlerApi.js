import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const wrestlers = [{
    usawId: "53409601",
    email: "JohnnyAkin@test.com",
    firstName: "Johnny",
    lastName: "Akin",
    dob: "10/10/93",
    phone: "913-555-1234",
    gender: "male",
    address1: "123 Test st.",
    city: "Gardner",
    state: "KS",
    zip: "66030",
    parentFirstName: "Eric",
    parentLastName: "Akin",
    parentEmail: "EricAkin@test.com"
  },
  {
    usawId: "10962601",
    email: "AnthonyGaona@test.com",
    firstName: "Anthony",
    lastName: "Gaona",
    dob: "07/10/97",
    phone: "913-555-1254",
    gender: "male",
    address1: "123 Magic ct.",
    city: "Olathe",
    state: "KS",
    zip: "66062",
    parentFirstName: "Jorge",
    parentLastName: "Gaona",
    parentEmail: "JorgGaonae@test.com",
    parent2FirstName: "Anthonys",
    parent2LastName: "Mom",
    parent2Email: "AnthonysMom@test.com"
  },
  {
    usawId: "49833301",
    email: "PeytonReeves@test.com",
    firstName: "Peyton",
    lastName: "Reeves",
    dob: "1/12/94",
    phone: "913-555-6234",
    gender: "male",
    address1: "55456 Test ter.",
    city: "Overland Park",
    state: "KS",
    zip: "66212",
    parentFirstName: "Daddy",
    parentLastName: "Reeves",
    parentEmail: "DaddyReeves@test.com"
  },
  {
    usawId: "11221401",
    email: "BretMinor@test.com",
    firstName: "Bret",
    lastName: "Minor",
    dob: "10/10/96",
    phone: "913-555-1774",
    gender: "male",
    address1: "6659 Test st.",
    city: "Gardner",
    state: "KS",
    zip: "66030"
  },
  {
    usawId: "21268601",
    email: "JaredSimma@test.com",
    firstName: "Jared",
    lastName: "Simma",
    dob: "05/07/98",
    phone: "913-555-9876",
    gender: "male",
    address1: "123 STA Boulevard st.",
    city: "Olathe",
    state: "KS",
    zip: "66062"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (wrestler) => {
  return replaceAll(wrestler.email, ' ', '-');
};

class WrestlerApi {
  static getAllWrestlers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], wrestlers));
      }, delay);
    });
  }

  static saveWrestler(wrestler) {
    wrestler = Object.assign({}, wrestler); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minWrestlerEmailLength = 1;
        if (wrestler.email.length < minWrestlerEmailLength) {
          reject(`Email must be at least ${minWrestlerEmailLength} characters.`);
        }

        if (wrestler.id) {
          const existingWrestlerIndex = wrestlers.findIndex(a => a.id == wrestler.id);
          wrestlers.splice(existingWrestlerIndex, 1, wrestler);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new wrestlers in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          wrestler.id = generateId(wrestler);
          wrestler.watchHref = `http://www.pluralsight.com/courses/${wrestler.id}`;
          wrestlers.push(wrestler);
        }

        resolve(wrestler);
      }, delay);
    });
  }

  static deleteWrestler(wrestlerId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfWrestlerToDelete = wrestlers.findIndex(wrestler => {
          wrestler.id == wrestlerId;
        });
        wrestlers.splice(indexOfWrestlerToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default WrestlerApi;
