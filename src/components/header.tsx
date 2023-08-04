import LucideIcon from "@/components/lucide-icon";

function Header() {
  return (
    <header className="sticky top-0 left-0 z-20 bg-white border-b border-b-gray-200">
      <div className="container lg:max-w-screen-lg flex justify-between px-4 mx-auto">
        <h1 className="flex font-bold leading-[100%] py-4 -tracking-[1px] text-lg items-center gap-[2px]">
          <span>Yusborin</span>
          <span className="px-2 py-[6px] text-white bg-gradient-to-tr from-blue-700 to-blue-500 rounded">
            Books
          </span>
        </h1>
        <nav className="flex items-center">
          <ul className="flex gap-2">
            <li className="capitalize flex items-center gap-2 bg-gradient-to-t from-gray-100 to-gray-50 rounded px-4 py-3 text-sm text-gray-700 hover:text-gray-900 transition-colors hover:from-gray-200 hover:to-gray-100">
              <LucideIcon
                name="book-copy"
                width={21}
                height={21}
                strokeWidth={1.5}
              />
              <span>All books</span>
            </li>
            <li className="capitalize flex items-center gap-2 bg-gradient-to-t from-gray-100 to-gray-50 rounded px-4 py-3 text-sm text-gray-700 hover:text-gray-900 transition-colors hover:from-gray-200 hover:to-gray-100">
              <LucideIcon
                name="scroll-text"
                width={21}
                height={21}
                strokeWidth={1.5}
              />
              <span>Reading list</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
