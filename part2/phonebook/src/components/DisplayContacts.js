const DisplayContacts = ({ persons, deleteFunc }) => {
  if (persons) {
    return (
      <div>
        {persons.map((person) => {
          return (
            <div key={person.name}>
              <p>
                {person.name} {person.number}{" "}
                <button onClick={() => deleteFunc(person.id)}>delete</button>
              </p>
            </div>
          );
        })}
      </div>
    );
  } else return;
};

export default DisplayContacts;
