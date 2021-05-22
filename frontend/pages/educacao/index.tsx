import Link from "next/link";

export default function Educacao() {
  return (

      <div className="flex flex-col h-screen items-center justify-center">
        <Link href="/educacao/organicos" >
          <div className="m-4 border-2 p-8 rounded-xl">Orgânicos</div>
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
    
  );
}
