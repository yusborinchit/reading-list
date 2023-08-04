import Header from "@/components/header";
import Head from "next/head";
import { type PropsWithChildren } from "react";

interface MainLayoutProps extends PropsWithChildren {
  title: string;
}

export default function MainLayout({ children, title }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />
      <main className="container lg:max-w-screen-lg p-4 mx-auto">
        {children}
      </main>
      <footer></footer>
    </>
  );
}
