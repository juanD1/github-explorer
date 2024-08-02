import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">GitHub Search App</h1>
        </Link>
        <div>
          <Link className="mx-2 hover:underline" href="/users">
            Users
          </Link>
          <Link className="mx-2 hover:underline" href="/repositories">
            Repositories
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
