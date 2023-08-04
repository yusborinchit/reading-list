import LucideIcon from "@/components/lucide-icon";
import { type Book } from "@/types";
import Image from "next/image";
import { useState } from "react";

interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleToggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <article
      key={book.ISBN}
      className="relative overflow-hidden transition-transform transform rounded hover:-translate-y-1 group"
    >
      <figure>
        <Image
          src={book.cover}
          width={180}
          height={270}
          alt={`${book.title} - Book cover`}
          className="object-cover w-full aspect-[1/1.5]"
        />
        <figcaption className="sr-only">{book.title}</figcaption>
      </figure>
      <footer
        className={`absolute inset-0 flex items-end justify-end transition-opacity opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black via-transparent to-transparent focus-within:opacity-100 ${
          isBookmarked && "opacity-100"
        }`}
      >
        <button
          aria-label="toggle bookmarked"
          aria-pressed={isBookmarked}
          data-pressed={isBookmarked}
          onClick={handleToggleBookmark}
          className="p-4 text-gray-300 data-[pressed=true]:text-blue-500 transition-colors hover:text-white data-[pressed=true]:hover:text-blue-600"
        >
          <LucideIcon
            name="bookmark"
            width={24}
            height={24}
            fill={isBookmarked ? "currentColor" : "none"}
          />
        </button>
      </footer>
    </article>
  );
}
export default BookCard;
