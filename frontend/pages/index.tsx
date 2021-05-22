import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/educacao">
        <a>Educação</a>
      </Link>
      <Link href="/coletas">
        <a>Coletas</a>
      </Link>
      <Link href="/denuncia">
        <a>Denúncia</a>
      </Link>
      <Link href="/avaliacao">
        <a>Avaliação</a>
      </Link>
    </>
  );
}
