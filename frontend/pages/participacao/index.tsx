import Link from "next/link";

export default function Participacao() {
  return (
    <div>
      <h1>Participação</h1>
      <div className="flex flex-col">
        <Link href="/participacao/denuncia">
          <a>Denúncia</a>
        </Link>
        <Link href="/participacao/avaliacao">
          <a>Avaliação</a>
        </Link>
      </div>
    </div>
  );
}
