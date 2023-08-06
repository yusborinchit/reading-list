import LucideIcon from "@/components/lucide-icon";
import NavbarItem from "@/components/ui/nav-item";

function Header() {
  return (
    <header className="sticky top-0 left-0 z-40 bg-white border-b border-b-gray-200">
      <div className="container flex justify-between px-4 mx-auto lg:max-w-screen-lg">
        <h1 className="flex font-bold leading-[100%] py-4 -tracking-[1px] text-lg items-center gap-[2px]">
          <span>Yusborin</span>
          <span className="px-2 py-[6px] text-white bg-gradient-to-tr from-blue-700 to-blue-500 rounded">
            Books
          </span>
        </h1>
        <nav className="flex items-center">
          <ul className="flex gap-2">
            <NavbarItem panel="all-books" label="All books">
              <LucideIcon
                name="book-copy"
                width={21}
                height={21}
                strokeWidth={1.5}
              />
            </NavbarItem>
            <NavbarItem panel="reading-list" label="Reading list">
              <LucideIcon
                name="scroll-text"
                width={21}
                height={21}
                strokeWidth={1.5}
              />
            </NavbarItem>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
