import BookCard from "@/components/book-card";
import MainLayout from "@/components/main-layout";
import { useBooks } from "@/hooks/use-books";
import { getAllBooks } from "@/services/books";
import { type Book } from "@/types";
import Image from "next/image";

interface HomeProps {
  initialBooks: Book[];
}

function Home({ initialBooks }: HomeProps) {
  const { books } = useBooks({ initialBooks });

  return (
    <MainLayout title="YusborinBooks - Your online reading list ✅📚">
      <section className="py-44 before:z-30 relative overflow-x-hidden before:absolute before:right-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-l before:from-white before:to-transparent">
        <div className="z-20">
          <h2 className="text-6xl leading-[0.9] font-black capitalize max-w-[200px]">
            Trending books
            <span className="text-transparent bg-gradient-to-tr from-blue-700 to-blue-500 bg-clip-text">
              .
            </span>
          </h2>
        </div>
        <div className="absolute -z-10 top-1/2 items-center -right-[90%] flex gap-4 -translate-y-1/2 sm:-right-[40%] md:-right-[30%] lg:-right-[5%] xl:right-0">
          <figure>
            <Image
              src={books[0].cover}
              width={180}
              height={270}
              alt={`${books[0].title} - Book cover`}
              className="object-cover rounded max-w-[230px] w-full aspect-[1/1.5]"
            />
            <figcaption className="sr-only">{books[0].title}</figcaption>
          </figure>
          <figure>
            <Image
              src={books[1].cover}
              width={180}
              height={270}
              alt={`${books[1].title} - Book cover`}
              className="object-cover rounded max-w-[180px] w-full aspect-[1/1.5]"
            />
            <figcaption className="sr-only">{books[1].title}</figcaption>
          </figure>
          <figure>
            <Image
              src={books[2].cover}
              width={180}
              height={270}
              alt={`${books[2].title} - Book cover`}
              className="object-cover rounded max-w-[180px] w-full aspect-[1/1.5]"
            />
            <figcaption className="sr-only">{books[2].title}</figcaption>
          </figure>
        </div>
      </section>
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
