import { type Book } from "@/types";
import { useEffect, useState } from "react";

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("/api/books/")
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, []);

  return { books };
}
