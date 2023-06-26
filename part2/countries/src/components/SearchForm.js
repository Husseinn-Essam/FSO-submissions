const SearchForm = ({ newSearch, setNewSearch, handleChange }) => {
  return (
    <div>
      <form>
        <div>
          Find Countries:{" "}
          <input value={newSearch} onChange={handleChange(setNewSearch)} />
        </div>
      </form>
    </div>
  );
};
export default SearchForm;
