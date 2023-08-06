import BookCard from "@/components/ui/book-card";
import BooksGrid from "@/components/ui/books-grid";
import { type Book } from "@/types";

interface ReadingListProps {
  books: Book[];
  readingList: Set<string>;
  removeFromReadingList: (ISBN: string) => void;
}

function ReadingList({
  books,
  readingList,
  removeFromReadingList,
}: ReadingListProps) {
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
          <span> Reading list</span>
          <span className="text-transparent bg-gradient-to-tr from-blue-700 to-blue-500 bg-clip-text">
            .
          </span>
        </h2>
      </header>
      {readingList.size <= 0 ? (
        <div className="min-h-[300px]">
          There is no books to read, add some books!
        </div>
      ) : (
        <BooksGrid>
          {books.map((book) => (
            <BookCard
              book={book}
              isBookmarked={readingList.has(book.ISBN)}
              removeFromReadingList={() => removeFromReadingList(book.ISBN)}
              key={book.ISBN}
            />
          ))}
        </BooksGrid>
      )}
    </section>
  );
}

export default ReadingList;
