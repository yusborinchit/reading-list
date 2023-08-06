import { type PropsWithChildren } from "react";

function BooksGrid({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
      {children}
    </div>
  );
}

export default BooksGrid;
