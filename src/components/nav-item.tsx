import { PropsWithChildren } from "react";

interface NavbarItemProps extends PropsWithChildren {
  label: string;
}

function NavbarItem({ label, children }: NavbarItemProps) {
  return (
    <li>
      <button className="capitalize flex items-center gap-2 bg-gradient-to-t from-gray-200 to-gray-100 rounded px-4 py-3 text-sm text-gray-500 hover:text-gray-900 focus-within:text-gray-900 transition-colors hover:from-gray-300 hover:to-gray-200 focus-within:from-gray-300 focus-within:to-gray-200">
        {children}
        <span className="hidden sm:inline-block">{label}</span>
      </button>
    </li>
  );
}

export default NavbarItem;
