import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  //Initialise states
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isCurrentContact, setIsCurrentContact] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(
    () => {
      if (isLoading) {
        return;
      }
      getContacts();
    },
    [],
    counter
  );

  //Connects to API and retrieves contacts
  const getContacts = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const json = await res.json();
      setContacts(json);
    } catch (err) {
      // To catch any errors when retrieving data
      console.log("An error occurred when getting contacts from the API", err);
    } finally {
      setIsLoading(false);
    }
  };

  //Gets current user, updated based on user input to cycle retrieved users
  useEffect(() => {
    try {
      getCurrentContact();
    } catch (error) {
    } finally {
      setIsCurrentContact(true);
    }
  });

  //Gets user matching counter as increment by user
  const getCurrentContact = () => {
    contacts.forEach((user) => {
      if (user.id === counter + 1) {
        setCurrentContact(user);
      }
    });
    console.log(currentContact);
  };

  //Default loading screen
  if (isLoading || !isCurrentContact) {
    return <div>Loading ...</div>;
  }

  //Increment contact counter
  const increment = () => {
    //Resets counter if incremented past contacts array length
    if (counter === contacts.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  //Decrement contact counter
  const decrement = () => {
    //Resets counter if decremented past 0
    if (counter === 0) {
      setCounter(contacts.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <body>
      <main>
        <section className="glass">
          <div className="dashboard">
            {/* Code for displaying all contacts retrieved as cards */}
            {/* {contacts.map((contact) => (
              <Card
                name={contact.name}
                username={contact.username}
                email={contact.email}
                address={contact.address}
                company={contact.company}
                phone={contact.phone}
                website={contact.website}
                key={contact.id}
              />
            ))} */}
            <div className="card-container">
              <Card
                name={currentContact.name}
                username={currentContact.username}
                email={currentContact.email}
                address={currentContact.address}
                company={currentContact.company}
                phone={currentContact.phone}
                website={currentContact.website}
                key={currentContact.id}
              />
            </div>
            <div className="btns">
              <button className="decrement" onClick={decrement}>
                Previous
              </button>
              <button className="increment" onClick={increment}>
                Next
              </button>
            </div>
          </div>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </body>
  );
};

export default App;
