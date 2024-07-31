"use client";
import { useState } from "react";

interface Repository {
  name: string;
  html_url: string;
  description: string;
}

interface UseRepositoriesReturn {
  repositories: Repository[];
  handleSearch: (query: string) => Promise<void>;
}

const UseRepositories = (): UseRepositoriesReturn => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${query}`
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setRepositories(data.items);
    } catch (error) {
      console.error(error.message);
    }
  };

  return { repositories, handleSearch };
};

export default UseRepositories;
