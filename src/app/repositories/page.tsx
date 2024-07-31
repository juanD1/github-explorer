"use client";
import React from "react";
import SearchForm from "@/components/SearchBar";
import UseRepositories from "./useRepositories";

const RepositoriesPage: React.FC = () => {
  const { repositories, handleSearch } = UseRepositories();

  return (
    <div>
      <h1>Repositories</h1>
      <SearchForm onSearch={handleSearch} />
      <ul>
        {repositories.map((repo) => (
          <li key={repo.name}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoriesPage;
