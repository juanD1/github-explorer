import React, { useState } from "react";

interface Props {
  placeholder: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-96 mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-32 ml-2 p-2 hover:bg-blue-400 bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
