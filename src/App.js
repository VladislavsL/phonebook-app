import React, { useState } from "react";

const PersonForm = props => {
  return (
    <>
      <h2>Add a new contact</h2>
      <form onSubmit={props.addUser}>
        <div>
          name:{" "}
          <input value={props.newName} onChange={props.handleNameChange} />
          <div>
            number:{" "}
            <input
              type="number"
              value={props.newPhone}
              onChange={props.handlePhoneChange}
            />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

const Filter = props => {
  return (
    <div>
      <span>The filtered contacts</span>{" "}
      <input onChange={props.handleSearchChange} />
    </div>
  );
};

const Numbers = props => {
  return (
    <>
      <h2>Numbers</h2>
      {props.names.map(name => (
        <li>
          {name.name} {name.number}
        </li>
      ))}
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [search, setSearch] = useState("");

  const addUser = event => {
    event.preventDefault();
    if (persons.find(person => person.name === newName) === undefined) {
      setPersons(persons.concat({ name: newName, number: newPhone }));
      setNewName("");
      setNewPhone("");
    } else alert(`${newName} name already exists in the phonebook`);
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = event => {
    setNewPhone(event.target.value);
  };

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  console.log(persons);
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleSearchChange={handleSearchChange}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        addUser={addUser}
      />
      <PersonForm newName={newName} newPhone={newPhone} />
      <div>
        <Numbers
          names={persons.filter(person =>
            person.name.toLowerCase().includes(search.toLowerCase())
          )}
        />
      </div>
    </div>
  );
};

export default App;
