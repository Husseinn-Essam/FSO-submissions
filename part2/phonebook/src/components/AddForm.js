const AddForm = ({
  addPerson,
  newName,
  newNum,
  setNewName,
  setNewNum,
  handleChange,
}) => {
  return (
    <div>
      <h2>Add a new </h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange(setNewName)} />
        </div>
        <div>
          Number: <input value={newNum} onChange={handleChange(setNewNum)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};
export default AddForm;
