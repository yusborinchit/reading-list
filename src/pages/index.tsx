import BookCard from "@/components/book-card";
import MainLayout from "@/components/main-layout";
import { useBooks } from "@/hooks/use-books";
import { getAllBooks } from "@/services/books";
import { type Book } from "@/types";

interface HomeProps {
  initialBooks: Book[];
}

function Home({ initialBooks }: HomeProps) {
  const { books } = useBooks({ initialBooks });

  return (
    <MainLayout title="YusborinBooks - Your online reading list ✅📚">
      <section className="grid gap-6 flex-1">
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
        <div className="gap-4 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
          {books.map((book) => (
            <BookCard book={book} key={book.ISBN} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const initialBooks = await getAllBooks();
  return { props: { initialBooks } };
}

export default Home;
