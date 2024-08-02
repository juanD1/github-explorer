"use client";
import React, { useEffect, useMemo } from "react";
import useUsers from "./useUsers";
import Image from "next/image";
import SearchSection from "@/components/SearchSection";
import SkeletonCard from "@/components/SkeletonCard";

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
      {!items.length && (
        <p className="text-lx font-bold mb-8">
          Upps! there is not results for your search
        </p>
      )}
      {loading ? (
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <SkeletonCard key={i} />
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
                <Image
                  className="inline-block rounded-full ring-2 ring-blue-500 w-12 h-12 mr-4"
                  src={user?.avatar_url}
                  alt={user?.login}
                  width={50}
                  height={50}
                />
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-blue-600 hover:underline"
                >
                  {user?.login}
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default UsersPage;
