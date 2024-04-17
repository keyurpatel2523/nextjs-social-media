import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-white text-2xl font-bold">Social Media</a>
        </Link>
        <nav className="space-x-4">
          <Link href="/feed">
            <a className="text-white hover:text-gray-200">Feed</a>
          </Link>
          <Link href="/messages">
            <a className="text-white hover:text-gray-200">Messages</a>
          </Link>
          <Link href="/profile">
            <a className="text-white hover:text-gray-200">Profile</a>
          </Link>
          {/* Add more navigation links as needed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
