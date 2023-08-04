import { type Book } from "@/types";
import { useEffect, useState } from "react";

export function useBooks({ initialBooks }: { initialBooks: Book[] }) {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  useEffect(() => {
    if (initialBooks.length === 0) return;

    fetch("/api/books/")
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, [initialBooks]);

  return { books };
}
