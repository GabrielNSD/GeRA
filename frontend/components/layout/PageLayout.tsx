import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

function Layout({ children, title }: { children: React.ReactNode, title:string }) {
  const router = useRouter();
  console.log(title)
  let navbar
  if(children.type) {
    if (children.type.name !== "Home") {
      navbar = <header className="flex flex-col fixed w-full bg-primary top-0 h-16 z-50">
      <nav
        className="flex flex-1 content-center pl-4"
        onClick={() => {
          router.back();
        }}
      >
        <Image
          src="/icons/back-arrow.svg"
          alt="voltar"
          width="25px"
          height="25 px"
        />
      </nav>
      <div className="bg-white rounded-t-3xl h-4"></div>
    </header>
    }

  }
  return (
    <div className="page flex flex-col min-h-screen justify-between relative">
      <Head>
        <title>GeRA - Gestão de Resíduos Sólidos de Araguaína</title>
        <meta
          name="description"
          content="Portal com informações e canais de participação popular sobre a coleta de Resíduos Sólidos de Araguaína/TO"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {navbar}
      <main className="mt-16 flex flex-col flex-1 justify-center items-center bg-white w-screen max-w-screen z-100">
        {children}
      </main>
      {/* <footer className="w-full h-24 border-t-2 border-gray-100 flex justify-center place-items-center">
        <a
          className="flex justify-center place-items-center flex-grow"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Potiguares
        </a>
      </footer> */}
    </div>
  );
}

export default Layout;
