import BookCard from "@/components/ui/book-card";
import BooksGrid from "@/components/ui/books-grid";
import { type Book } from "@/types";

interface AllBooksProps {
  books: Book[];
  readingList: Set<string>;
  addToReadingList: (ISBN: string) => void;
  removeFromReadingList: (ISBN: string) => void;
}

function AllBooks({
  books,
  readingList,
  addToReadingList,
  removeFromReadingList,
}: AllBooksProps) {
  return (
    <section className="grid flex-1 gap-6">
      <header className="flex items-center gap-2">
        <h2 className="text-4xl font-black">
          <span
            aria-hidden
            className="text-transparent bg-gradient-to-tr from-blue-700 to-blue-500 bg-clip-text"
          >
            #
          </span>
          <span> All books</span>
          <span className="text-transparent bg-gradient-to-tr from-blue-700 to-blue-500 bg-clip-text">
            .
          </span>
        </h2>
      </header>
      <BooksGrid>
        {books.map((book) => (
          <BookCard
            book={book}
            isBookmarked={readingList.has(book.ISBN)}
            addToReadingList={() => addToReadingList(book.ISBN)}
            removeFromReadingList={() => removeFromReadingList(book.ISBN)}
            key={book.ISBN}
          />
        ))}
      </BooksGrid>
    </section>
  );
}

export default AllBooks;
