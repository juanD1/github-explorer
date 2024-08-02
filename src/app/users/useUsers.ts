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
  loading: boolean;
  error: string;
  handleSearch: (query: string) => Promise<void>;
  handleFilterByOrder: (filter: string | undefined) => void;
}

const useUsers = (): UseUsersReturn => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setLoading(false);
      setError("");
      setUsers(data.items);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
      setError(error.message);
    }
  };

  const handleFilterByOrder = (filter: string | undefined) => {
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

  return {
    users,
    loading,
    error,
    filteredUsers,
    handleSearch,
    handleFilterByOrder,
  };
};

export default useUsers;
