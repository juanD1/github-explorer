import Spinner from "@/components/Spinner";
import React, { useState } from "react";

interface Props {
  placeholder: string;
  isLoading: boolean;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ placeholder, isLoading, onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mb-8 flex flex-row">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded w-96"
      />
      <button
        type="submit"
        className="w-32 ml-2 p-2 hover:bg-blue-100 bg-blue-500 text-white rounded flex justify-center"
      >
        {!isLoading ? "Search" : <Spinner />}
      </button>
    </form>
  );
};

export default SearchBar;
