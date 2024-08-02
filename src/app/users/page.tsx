"use client";
import React, { useEffect, useMemo } from "react";
import SearchForm from "@/components/SearchBar";
import useUsers from "./useUsers";
import Image from "next/image";
import DropDown from "@/components/DropDown";

const UsersPage: React.FC = () => {
  const { users, filteredUsers, handleSearch, handleFilter } = useUsers();
  const items = useMemo(
    () => (filteredUsers.length ? filteredUsers : users),
    [users, filteredUsers]
  );

  useEffect(() => {}, [users, filteredUsers]);

  return (
    <div className="p-32">
      <h1 className="text-3xl font-bold mb-8">Users List</h1>
      <div className="w-full flex">
        <SearchForm
          placeholder="Search user on GitHub"
          onSearch={handleSearch}
        />
        <DropDown onChange={handleFilter} />
      </div>
      <ul className="grid grid-cols-4 gap-6">
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
              <p className="p-0 m-0 text-base">{user?.login}</p>
              {/* </a> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
