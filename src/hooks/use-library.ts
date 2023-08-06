import { type Book } from "@/types";
import { useEffect, useMemo, useState } from "react";

const LS_READING_LIST_KEY = "yusborinbooks-reading-list";

export function useLibrary() {
  const [books, setBooks] = useState<Book[]>([]);
  const [readingList, setReadingList] = useState<Set<string>>(() => new Set());

  const filteredBooks = useMemo(() => books, [books]);

  useEffect(() => {
    fetch("/api/books/")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);

        const lsReadingList = localStorage.getItem(LS_READING_LIST_KEY);
        if (!lsReadingList)
          return localStorage.setItem(LS_READING_LIST_KEY, JSON.stringify([]));

        setReadingList(new Set(Array.from(JSON.parse(lsReadingList))));
      });
  }, []);

  const addToReadingList = (ISBN: string) => {
    if (!books.find((book) => book.ISBN === ISBN)) return;

    const newReadingList = structuredClone(readingList);
    newReadingList.add(ISBN);

    localStorage.setItem(
      LS_READING_LIST_KEY,
      JSON.stringify(Array.from(newReadingList))
    );

    setReadingList(newReadingList);
  };

  const removeFromReadingList = (ISBN: string) => {
    if (!readingList.has(ISBN)) return;

    const newReadingList = structuredClone(readingList);
    newReadingList.delete(ISBN);

    localStorage.setItem(
      LS_READING_LIST_KEY,
      JSON.stringify(Array.from(newReadingList))
    );

    setReadingList(newReadingList);
  };

  return {
    filteredBooks,
    readingList,
    addToReadingList,
    removeFromReadingList,
  };
}
