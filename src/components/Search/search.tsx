import { searchFormAction } from "@/actions/searchFormAction";

const Search = () => {

  return (
    <form action={searchFormAction} className="h-6 flex items-center gap-2">
      <input
        name="search"
        type="text"
        placeholder="Procure o filme"
        className="p-2 border rounded-xl border-gray-400 outline-none bg-transparent"
      />
      <button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-search h-4"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </button>
    </form>
  );
};

export default Search;
