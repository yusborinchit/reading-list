import { type Book } from "@/types";
import { useEffect, useState } from "react";

export function useBooks({ initialBooks }: { initialBooks: Book[] }) {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  useEffect(() => {
    if (initialBooks.length > 0) return;

    const getData = async () => {
      const response = await fetch("/api/books/");
      const data = await response.json();
      setBooks(data.books);
    };

    getData();
  }, [initialBooks]);

  return { books };
}
