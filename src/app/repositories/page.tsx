"use client";
import React, { useEffect, useMemo } from "react";
import UseRepositories from "./useRepositories";
import SearchSection from "@/components/SearchSection";
import Image from "next/image";

const RepositoriesPage: React.FC = () => {
  const {
    repositories,
    loading,
    error,
    filteredRepositories,
    handleSearch,
    handleFilterByOrder,
  } = UseRepositories();

  const items = useMemo(
    () => (filteredRepositories.length ? filteredRepositories : repositories),
    [repositories, filteredRepositories]
  );

  useEffect(() => {}, [repositories, filteredRepositories]);

  return (
    <main>
      <h1 className="text-3xl font-bold mb-8">Repositories</h1>
      <SearchSection
        placeholder="Search repositories on GitHub"
        isLoading={loading}
        onSearch={handleSearch}
        handleFilterByOrder={handleFilterByOrder}
      />
      {error && (
        <p className="text-red-600 text-lx font-bold mb-8">
          Upps! Error - {error}
        </p>
      )}
      {!items.length && (
        <p className="text-lx font-bold mb-8">
          Upps! there is not results for your search
        </p>
      )}
      {loading ? (
        <ul className="grid grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <li
              className="animate-pulse w-full p-2 border border-slate-400 rounded-md cursor-pointer transform transition duration-100"
              key={i}
            >
              <div className="flex items-center">
                <div className="inline-block rounded-full ring-2 ring-slate-400 bg-slate-400 w-12 h-12 mr-4"></div>
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-2 bg-slate-400 rounded"></div>
                  <div className="h-2 bg-slate-400 rounded"></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
          {items.map((repo) => (
            <li
              className="w-full p-2 border border-slate-500 rounded-md cursor-pointer transform transition duration-100 hover:scale-110"
              key={repo.node_id}
            >
              <div className="flex items-center text-left">
                <Image
                  className="inline-block rounded-full ring-2 ring-blue-500 w-12 h-12 mr-4"
                  src={repo.owner?.avatar_url}
                  alt={repo.owner?.login}
                  width={50}
                  height={50}
                />
                <div className="flex-1">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-blue-600 hover:underline"
                  >
                    {repo.owner.login}/{repo.name}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    {repo.description || "No description available"}
                  </p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span className="inline-flex items-center mr-4">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {repo.language}
                    </span>
                    <span className="inline-flex items-center mr-4">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 10l5 5 5-5-5-5-5 5z"
                        />
                      </svg>
                      {repo.stargazers_count} stars
                    </span>
                    <span className="inline-flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      {repo.forks_count} forks
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default RepositoriesPage;
