export type Panel = "all-books" | "reading-list";

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: {
    name: string;
    otherBooks: string[];
  };
}

export interface Library {
  library: {
    book: Book;
  }[];
}
