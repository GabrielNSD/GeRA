import Head from "next/head";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page flex flex-col h-screen justify-between relative">
      <Head>
        <title>GeRA - Gestão de Resíduos Sólidos de Araguaína</title>
        <meta
          name="description"
          content="Portal com informações e canais de participação popular sobre a coleta de Resíduos Sólidos de Araguaína/TO"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-0 flex flex-col flex-1 justify-center items-center bg-gray-200">
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
