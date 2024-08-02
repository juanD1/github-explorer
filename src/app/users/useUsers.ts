"use client";
import { useState } from "react";

interface User {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

interface UseUsersReturn {
  users: User[];
  filteredUsers: User[];
  handleSearch: (query: string) => Promise<void>;
  handleFilter: (filter: string) => void;
}

const useUsers = (): UseUsersReturn => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data.items);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleFilter = (filter: string) => {
    if (!filter) {
      setFilteredUsers([]);
      return;
    }

    const sortedItems = [...users].sort((a: User, b: User) => {
      if (filter === "a-z") {
        return a.login.localeCompare(b.login);
      } else {
        return b.login.localeCompare(a.login);
      }
    });
    setFilteredUsers(sortedItems);
  };

  return { users, handleSearch, filteredUsers, handleFilter };
};

export default useUsers;
