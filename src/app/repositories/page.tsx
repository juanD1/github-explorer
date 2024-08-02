"use client";
import React from "react";
import UseRepositories from "./useRepositories";
import SearchSection from "@/components/SearchSection";

const RepositoriesPage: React.FC = () => {
  const { repositories, handleSearch } = UseRepositories();

  return (
    <div>
      <h1>Repositories</h1>
      <SearchSection
        placeholder="Search repositories on GitHub"
        onSearch={handleSearch}
        handleFilterByOrder={() => {}}
      />
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
