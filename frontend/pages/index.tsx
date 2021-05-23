import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center top-0 z-1000">
      <progress value="70" max="100" className="mb-1"></progress>
      <div className="mb-8">3 dias até a próxima coleta</div>
      <div className="grid grid-cols-2 grid-row-2 gap-x-4 w-52">
        <Link href="/educacao">
          <a>
            <div className="p-4 my-4 bg-gray-100 rounded-md shadow-2xl flex flex-col items-center text-sm rounded-2xl">
              <Image
                src="/icons/i.svg"
                alt="Saiba mais sobre resíduos sólidos"
                width="42px"
                height="42px"
              />{" "}
              Informações
            </div>
          </a>
        </Link>
        <Link href="/coletas">
          <a>
            <div className="p-4 my-4  bg-gray-100 rounded-md shadow-2xl flex flex-col items-center justify-around text-sm rounded-2xl">
              <Image
                src="/icons/coleta.svg"
                alt="Informe-se sobre os horários de coleta na sua região"
                width="42px"
                height="42px"
              />{" "}
              Coletas
            </div>
          </a>
        </Link>
        <Link href="/denuncia">
          <a>
            <div className="p-4 my-4  bg-gray-100 rounded-md shadow-2xl flex flex-col items-center justify-around text-sm rounded-2xl">
              <Image
                src="/icons/denuncias.svg"
                alt="Avise sobre problemas com descarte irregular de resíduos sólidos "
                width="42px"
                height="42px"
              />{" "}
              Denúncias
            </div>
          </a>
        </Link>
        <Link href="/avaliacao">
          <a>
            <div className="p-4 my-4  bg-gray-100 rounded-md shadow-2xl flex flex-col items-center justify-around text-sm rounded-2xl">
              <Image
                src="/icons/avaliacoes.svg"
                alt="Diga para a prefeitura como está o serviço de coleta na sua área"
                width="42px"
                height="42px"
              />{" "}
              Avaliações
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
