import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-8">Welcome to GitHub Search App</h1>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        <div className="p-4 border rounded-md shadow-md">
          <Image
            src="/images/repository.svg"
            alt="repositories"
            width={64}
            height={64}
            className="mx-auto mb-4"
            priority
          />
          <p className="text-base mb-4">
            Discover GitHub repositories to get inspired and learn about
            programming. Explore various languages, frameworks, and projects.
            Find valuable resources to enhance your skills and knowledge.
          </p>
          <Link
            href="/repositories"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Search Repositories
          </Link>
        </div>
        <div className="p-4 border rounded-md shadow-md">
          <Image
            src="/images/developer.svg"
            alt="Developers"
            width={64}
            height={64}
            priority
            className="mx-auto mb-4"
          />
          <p className="text-base mb-4">
            Find software developers' profiles, connect with them, and follow
            trends in the community. Engage with like-minded professionals,
            collaborate on projects, and stay updated with the latest
            advancements in technology.
          </p>

          <Link
            href="/users"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Search Users
          </Link>
        </div>
        <div className="p-4 border rounded-md shadow-md">
          <Image
            src="/images/tech.svg"
            alt="Technologies"
            width={64}
            height={64}
            priority
            className="mx-auto mb-4"
          />
          <p className="text-base mb-4">
            Discover repositories showcasing cutting-edge technologies,
            innovative solutions, and best coding practices. Learn from seasoned
            developers' code, contribute to open-source projects, and make your
            mark in the programming world.
          </p>
        </div>
        <div className="p-4 border rounded-md shadow-md">
          <Image
            src="/images/search.svg"
            alt="Search"
            width={64}
            height={64}
            priority
            className="mx-auto mb-4"
          />
          <p className="text-base mb-4">
            Easily find repositories and developer profiles that match your
            interests with our intuitive search functionality. Start your
            journey today and unlock the full potential of GitHub's vast
            repository of knowledge and talent.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
