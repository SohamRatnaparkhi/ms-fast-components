import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import { CounterBtn } from "../components/btn/btn.compose";
import dynamic from "next/dynamic";
// import MyButton from "../components/MyButton";
// import MyButton3 from "../components/MyButton3";
// import MyButton4 from "../components/MyButton4";

const CounterBtn = dynamic(() => import("../components/counter/btn.compose"), {
  ssr: false,
}); //! should display the counter button

const MyButton = dynamic(() => import("../components/MyButton"), {
  ssr: false,
}); //! should display John Doe or the response from api/hello

const MyButton2 = dynamic(() => import("../components/MyButton2"), {
  ssr: false,
}); //! should display api/getNames response

const MyButton3 = dynamic(() => import("../components/MyButton3"), {
  ssr: false,
});

const MyButton4 = dynamic(() => import("../components/MyButton4"), {
  ssr: false,
}); //! Similar response to MyButton2

// import CounterBtn from "../node_modules/my-fast-comps/src/btn/btn.compose";

const MyButton5 = dynamic(() => import("../components/MyButton5"), {
  ssr: false,
}); //! Similar response to MyButton2

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <CounterBtn />
          <MyButton />
          <MyButton2 />
          <MyButton3 />
          <MyButton4 />
          <MyButton5 />
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
