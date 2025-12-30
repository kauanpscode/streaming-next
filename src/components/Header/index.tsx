import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 px-4">
        <div className="flex lg:flex-1">
          <Link href="/">Pontes</Link>
        </div>

        <ul className="flex gap-x-8">
          <li>
            <Link
              href="/"
              className="text-sm font-semibold leading-6 hover:text-blue-500 transition-colors"
            >
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
