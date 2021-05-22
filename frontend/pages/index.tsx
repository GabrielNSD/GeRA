import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 grid-row-2 gap-x-4 w-52">
        <Link href="/educacao">
          <a>
            <div className="p-4 my-4 bg-gray-50 rounded-md shadow-md flex flex-col items-center">
              <Image
                src="/icons/info.svg"
                alt="Saiba mais sobre resíduos sólidos"
                width="30px"
                height="30px"
              />{" "}
              Informações
            </div>
          </a>
        </Link>
        <Link href="/coletas">
          <a>
            <div className="p-4 my-4  bg-gray-50 rounded-md shadow-md flex flex-col items-center justify-around">
              <Image
                src="/icons/truck.svg"
                alt="Informe-se sobre os horários de coleta na sua região"
                width="30px"
                height="30px"
              />{" "}
              Coletas
            </div>
          </a>
        </Link>
        <Link href="/denuncia">
          <a>
            <div className="p-4 my-4  bg-gray-50 rounded-md shadow-md flex flex-col items-center justify-around">
              <Image
                src="/icons/warning.svg"
                alt="Avise sobre problemas com descarte irregular de resíduos sólidos "
                width="30px"
                height="30px"
              />{" "}
              Denúncias
            </div>
          </a>
        </Link>
        <Link href="/avaliacao">
          <a>
            <div className="p-4 my-4  bg-gray-50 rounded-md shadow-md flex flex-col items-center justify-around">
              <Image
                src="/icons/check.svg"
                alt="Diga para a prefeitura como está o serviço de coleta na sua área"
                width="30px"
                height="30px"
              />{" "}
              Avaliações
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
