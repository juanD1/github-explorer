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
  handleSearch: (query: string) => Promise<void>;
}

const useUsers = (): UseUsersReturn => {
  const [users, setUsers] = useState<User[]>([]);

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

  return { users, handleSearch };
};

export default useUsers;
