import { useState, useEffect } from "react";
import DisplayContacts from "./DisplayContacts.js";
import AddForm from "./AddForm.js";
import SearchForm from "./SearchForm.js";
import services from "../services.js";
import Notification from "./Notification.js";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [succMsg, setSucc] = useState("");
  const [errMsg, setErr] = useState("");
  useEffect(() => {
    services.getPersons().then((data) => {
      setPersons(data);
    });
  }, []);

  const deletePerson = (id) => {
    const toBeDeleted = persons.find((person) =>
      person.id === id ? person : ""
    );
    const result = window.confirm(`Delete ${toBeDeleted.name}?`);
    if (result) {
      services
        .deleteReq(id)
        .then(() => setPersons(persons.filter((person) => person.id !== id)))
        .catch((err) => catchDeletedError(toBeDeleted.name));
    } else {
      return;
    }
  };

  const handleChange = (func) => {
    return (e) => func(e.target.value);
  };

  const catchDeletedError = (name) => {
    setErr(`info about ${name} has already been removed form server`);
    setTimeout(() => setErr(null), 5000);
  };

  const addPerson = (e) => {
    e.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      if (existingPerson.number === newNum) {
        alert(`${newName} is already in the phonebook`);
      } else {
        const confirmChange = window.confirm("Change the phone number?");
        if (confirmChange) {
          const updatedPerson = {
            ...existingPerson,
            number: newNum,
          };

          services
            .updateNumReq(existingPerson.id, updatedPerson)
            .then((data) => {
              setPersons(
                persons.map((person) =>
                  person.id !== existingPerson.id ? person : data
                )
              );
              setSucc(`${data.name} has been added`);
              setTimeout(() => setSucc(null), 5000);
            })
            .catch((error) => {
              console.log("Error updating person:", error);
              console.log(existingPerson);
              catchDeletedError(existingPerson.name);
            });
        }
      }
    } else {
      const newPerson = { name: newName, number: newNum };

      services
        .postPerson(newPerson)
        .then((data) => {
          setPersons([...persons, data]);
          setSucc(`${data.name} has been added`);
          setTimeout(() => setSucc(null), 5000);
        })
        .catch((error) => {
          console.log("Error adding person:", error);
        });
    }
  };

  const searchFor = () => {
    return persons.filter((person) => {
      return person.name.includes(newSearch);
    });
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <SearchForm
        newSearch={newSearch}
        setNewSearch={setNewSearch}
        searchFor={searchFor}
        handleChange={handleChange}
      />
      <Notification succMessage={succMsg} errMessage={errMsg} />
      <AddForm
        addPerson={addPerson}
        newName={newName}
        newNum={newNum}
        setNewName={setNewName}
        setNewNum={setNewNum}
        handleChange={handleChange}
      />
      <h2>Numbers</h2>
      <DisplayContacts
        persons={newSearch === "" ? persons : searchFor()}
        deleteFunc={deletePerson}
      />
    </div>
  );
};

export default App;
