import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Link href="/educacao">
        <a>
          <div className="p-4 my-4 w-52 bg-gray-50 rounded-md shadow-md flex items-center">
            <Image
              src="/icons/info.svg"
              alt="Saiba mais sobre resíduos sólidos"
              width="48px"
              height="48px"
            />{" "}
            Educação
          </div>
        </a>
      </Link>
      <Link href="/coletas">
        <a>
          <div className="p-4 my-4 w-52 bg-gray-50 rounded-md shadow-md flex items-center">
            <Image
              src="/icons/truck.svg"
              alt="Saiba mais sobre resíduos sólidos"
              width="48px"
              height="48px"
            />{" "}
            Coletas
          </div>
        </a>
      </Link>
      <Link href="/denuncia">
        <a>
          <div className="p-4 my-4 w-52 bg-gray-50 rounded-md shadow-md flex items-center">
            <Image
              src="/icons/warning.svg"
              alt="Avise sobre problemas com descarte irregular de resíduos sólidos "
              width="48px"
              height="48px"
            />{" "}
            Denúncia
          </div>
        </a>
      </Link>
      <Link href="/avaliacao">
        <a>
          <div className="p-4 my-4 w-52 bg-gray-50 rounded-md shadow-md flex items-center">
            <Image
              src="/icons/check.svg"
              alt="Diga para a prefeitura como está o serviço de coleta na sua área"
              width="48px"
              height="48px"
            />{" "}
            Avaliação
          </div>
        </a>
      </Link>
    </>
  );
}
