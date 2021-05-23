import Link from "next/link"
import Image from "next/image"
import locale from "date-fns/locale/pt-BR"
import { nextMonday, formatDistanceToNow } from "date-fns"

import Layout from "../components/layout/PageLayout"
const timeUntil = formatDistanceToNow(nextMonday(new Date()), {
  locale,
})

export default function Home({ title }: { title: string }) {
  title = "Home"
  return (
    <Layout title="Home">
      <div className="flex flex-col justify-center items-center top-0 z-1000">
        <div className="mb-8 ml-10">
          <Image
            src="/images/gera.png"
            alt="gera"
            height="200px"
            width="250px"
          />
        </div>
        <div className="text-lg">{timeUntil} </div>
        <div className="text-xs">até a próxima coleta</div>
        <progress value="70" max="100" className="mb-8"></progress>

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
    </Layout>
  )
}
