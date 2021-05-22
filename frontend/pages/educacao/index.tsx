import Link from "next/link"

export default function Educacao() {
    return (
      <div>
        <h1>Educação</h1>
        <div className="flex flex-col">
        <Link href="/educacao/organicos">
          <a>Orgânicos</a>
        </Link>
        <Link href="/educacao/reciclaveis">
          <a>Recicláveis</a>
        </Link>
        <Link href="/educacao/rejeitos">
          <a>Rejeitos</a>
        </Link>
        <Link href="/educacao/separacao">
          <a>Separação</a>
        </Link>
      </div>
      </div>
    );
  }
  