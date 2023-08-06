import MainLayout from "@/components/layouts/main-layout";
import BookList from "@/components/sections/all-books";
import ReadingList from "@/components/sections/reading-list";
import { useLibrary } from "@/hooks/use-library";
import { usePanelContext } from "@/hooks/use-panel-context";
import Image from "next/image";

function Home() {
  const { panel } = usePanelContext();

  const {
    filteredBooks,
    readingList,
    addToReadingList,
    removeFromReadingList,
  } = useLibrary();

  return (
    <MainLayout title="YusborinBooks - Your online reading list ✅📚">
      <section className="relative overflow-x-hidden py-44">
        <div className="z-20 flex flex-col gap-4">
          <h2 className="text-6xl leading-[0.9] font-black capitalize max-w-[200px]">
            Trending books
            <span className="text-transparent bg-gradient-to-tr from-blue-700 to-blue-500 bg-clip-text">
              .
            </span>
          </h2>
          <p className="text-gray-500">At your fingertips.</p>
        </div>
        <div className="absolute -z-10 top-1/2 items-center -right-[100%] flex gap-4 -translate-y-1/2 sm:-right-[60%] md:-right-[40%] lg:-right-[5%] xl:right-0">
          <figure className="w-[240px]">
            <Image
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg"
              priority
              width={180}
              height={270}
              alt="El Señor de los Anillos - Book cover"
              className="object-cover rounded w-full aspect-[1/1.5]"
            />
            <figcaption className="sr-only">El Señor de los Anillos</figcaption>
          </figure>
          <figure className="w-[180px]">
            <Image
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg"
              priority
              width={180}
              height={270}
              alt="Juego de Tronos - Book cover"
              className="object-cover rounded w-full aspect-[1/1.5]"
            />
            <figcaption className="sr-only">Juego de Tronos</figcaption>
          </figure>
          <figure className="w-[180px]">
            <Image
              src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg"
              priority
              width={180}
              height={270}
              alt="Harry Potter y la piedra filosofal - Book cover"
              className="object-cover rounded w-full aspect-[1/1.5]"
            />
            <figcaption className="sr-only">
              Harry Potter y la piedra filosofal
            </figcaption>
          </figure>
        </div>
      </section>
      {panel === "all-books" && (
        <BookList
          books={filteredBooks}
          readingList={readingList}
          addToReadingList={addToReadingList}
          removeFromReadingList={removeFromReadingList}
        />
      )}
      {panel === "reading-list" && (
        <ReadingList
          books={filteredBooks.filter((book) => readingList.has(book.ISBN))}
          readingList={readingList}
          removeFromReadingList={removeFromReadingList}
        />
      )}
    </MainLayout>
  );
}

export default Home;
