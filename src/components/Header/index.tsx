import Link from 'next/link';

const Header = () => {
  return (
    <header className="backdrop-blur-md sticky top-0 w-full border-b border-gray-200 bg-black/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 px-4">
        <div className="flex lg:flex-1">
          <Link href="/" className="group flex items-center gap-1">
            <span className="text-2xl font-black tracking-tighter text-white transition-all group-hover:tracking-normal">
              PON<span className="text-red-500">TES</span>
            </span>
          </Link>
        </div>

        <ul className="flex gap-x-8">
          <li>
            <Link
              href="/"
              className="text-sm font-semibold leading-6 hover:text-red-500 transition-colors"
            >
              
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
