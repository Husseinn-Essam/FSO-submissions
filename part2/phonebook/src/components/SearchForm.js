const SearchForm = ({ newSearch, setNewSearch, searchFor, handleChange }) => {
  return (
    <div>
      <form>
        <div>
          filter shown with:{" "}
          <input value={newSearch} onChange={handleChange(setNewSearch)} />
        </div>
      </form>
    </div>
  );
};
export default SearchForm;
