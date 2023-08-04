import libraryMock from "@/mocks/books.json";
import { type Book } from "@/types";

export async function getAllBooks(): Promise<Book[]> {
  const { library } = libraryMock;

  const mappedBooks = library.map(({ book }: { book: Book }) => book);

  return new Promise((resolve) => resolve(mappedBooks));
}
