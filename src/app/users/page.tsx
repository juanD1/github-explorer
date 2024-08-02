"use client";
import React, { useEffect, useMemo } from "react";
import useUsers from "./useUsers";
import Image from "next/image";
import SearchSection from "@/components/SearchSection";

const UsersPage: React.FC = () => {
  const {
    users,
    loading,
    error,
    filteredUsers,
    handleSearch,
    handleFilterByOrder,
  } = useUsers();
  const items = useMemo(
    () => (filteredUsers.length ? filteredUsers : users),
    [users, filteredUsers]
  );

  useEffect(() => {}, [users, filteredUsers]);

  return (
    <main>
      <h1 className="text-3xl font-bold mb-8">Users List</h1>
      <SearchSection
        placeholder="Search user on GitHub"
        isLoading={loading}
        onSearch={handleSearch}
        handleFilterByOrder={handleFilterByOrder}
      />
      {error && (
        <p className="text-red-600 text-lx font-bold mb-8">
          Upps! Error - {error}
        </p>
      )}
      {loading ? (
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <li
              className="animate-pulse w-full p-2 border border-slate-400 rounded-md cursor-pointer transform transition duration-100"
              key={i}
            >
              <div className="flex items-center">
                <div className="inline-block rounded-full ring-2 ring-slate-400 bg-slate-400 w-12 h-12 mr-4"></div>
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-2 bg-slate-400 rounded"></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
          {items.map((user) => (
            <li
              className="w-full p-2 border border-slate-500 rounded-md cursor-pointer transform transition duration-100 hover:scale-110"
              key={user?.id}
            >
              <div className="flex items-center">
                {/* <a href={user.html_url} target="_blank" rel="noopener noreferrer"> */}
                <Image
                  className="inline-block rounded-full ring-2 ring-blue-500 w-12 h-12 mr-4"
                  src={user?.avatar_url}
                  alt={user?.login}
                  width={50}
                  height={50}
                />
                <p className="p-0 m-0 text-sm md:text-base">{user?.login}</p>
                {/* </a> */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default UsersPage;
