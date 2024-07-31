"use client";
import React from "react";
import SearchForm from "@/components/SearchBar";
import useUsers from "./useUsers";

const UsersPage: React.FC = () => {
  const { users, handleSearch } = useUsers();

  return (
    <div>
      <h1>Users</h1>
      <SearchForm onSearch={handleSearch} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              <img src={user.avatar_url} alt={user.login} width={50} />
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
