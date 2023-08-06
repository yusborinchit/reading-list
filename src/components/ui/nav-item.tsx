import { usePanelContext } from "@/hooks/use-panel-context";
import { type Panel } from "@/types";
import { PropsWithChildren } from "react";

interface NavbarItemProps extends PropsWithChildren {
  label: string;
  panel: Panel;
}

function NavbarItem({ label, panel, children }: NavbarItemProps) {
  const { setPanel } = usePanelContext();

  const handleChangePanel = () => {
    if (!setPanel) return;
    setPanel(panel);
  };

  return (
    <li>
      <button
        onClick={handleChangePanel}
        className="flex items-center gap-2 px-4 py-3 text-sm text-gray-500 capitalize transition-colors rounded bg-gradient-to-t from-gray-200 to-gray-100 hover:text-gray-900 focus-within:text-gray-900 hover:from-gray-300 hover:to-gray-200 focus-within:from-gray-300 focus-within:to-gray-200"
      >
        {children}
        <span className="hidden sm:inline-block">{label}</span>
      </button>
    </li>
  );
}

export default NavbarItem;
