"use client";
import { useState } from "react";
import { Repository } from "./types";

interface UseRepositoriesReturn {
  repositories: Repository[];
  filteredRepositories: Repository[];
  loading: boolean;
  error: string;
  handleSearch: (query: string) => Promise<void>;
  handleFilterByOrder: (filter: string | undefined) => void;
}

const UseRepositories = (): UseRepositoriesReturn => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [filteredRepositories, setFilteredRepositories] = useState<
    Repository[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${query}`
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setLoading(false);
      setError("");
      setRepositories(data.items);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleFilterByOrder = (filter: string | undefined) => {
    if (!filter) {
      setFilteredRepositories([]);
      return;
    }

    const sortedItems = [...repositories].sort(
      (a: Repository, b: Repository) => {
        if (filter === "a-z") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      }
    );
    setFilteredRepositories(sortedItems);
  };

  return {
    repositories,
    filteredRepositories,
    loading,
    error,
    handleSearch,
    handleFilterByOrder,
  };
};

export default UseRepositories;
