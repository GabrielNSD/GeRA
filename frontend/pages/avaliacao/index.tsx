import { useEffect, useState } from "react"

import Backdrop from "../../components/Backdrop/Backdrop"
import ModalMap from "../../components/Modal/ModalMap"

import Image from "next/image"
import Layout from "../../components/layout/PageLayout"
import { useRouter } from "next/router"
import axios from "axios"

export default function Avaliacao() {
  const [isFinished, setIsFinished] = useState(false)
  const [regularidade, setRegularidade] = useState(true)
  const [sugestion, setSugestion] = useState("")
  const [openMap, setOpenMap] = useState(false)
  const router = useRouter()

  const [buttonClass, setButtonClass] = useState(
    "my-4 px-4 bg-gray-400 mx-24 rounded-xl"
  )

  const backdropClickHandler = () => {
    setOpenMap(false)
  }

  let backdrop = null

  if (openMap) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  useEffect(() => {
    if (sugestion.length > 25 && regularidade !== null) {
      setButtonClass("my-4 px-4 bg-primary mx-24 rounded-xl")
    }
  }, [sugestion])

  const sendEvaluation = () => {
    const payload = {
      localizacao: [],
      regularidade_coleta: regularidade,
      avaliacao_coleta_rsd: 5,
      descricao: sugestion,
    }

    try {
      axios.post("http://localhost:1337/quizzes", payload)
    } catch (error) {
    } finally {
      setIsFinished(true)
      // alert("Agradecemos sua participação!")
      // router.push("/")
    }
  }

  let body = (
    <>
      {backdrop}
      <ModalMap
        openModalMap={openMap}
        initialLocation={["-7.1877", "-48.2098"]}
      />
      <p className="text-center p-4 my-2 text-sm">
        Acreditamos em um processo de melhoria constante. Nos Ajude ao avaliar o
        serviço de coleta no seu endereço
      </p>
      <div
        className="text-sm"
        onClick={() => {
          setOpenMap((prevState) => !prevState)
        }}
      >
        Localização
        <Image
          src="/icons/pin.svg"
          alt="ver no mapa"
          height="12px"
          width="12px"
        />
      </div>
      <div className="self-start mx-4 my-2">Há regularidade na coleta?</div>
      <div className="flex flex-col self-start mx-4">
        <div>
          <input
            type="radio"
            id="sim"
            name="avColeta"
            onClick={() => {
              setRegularidade(true)
            }}
            checked
          />
          <label htmlFor="sim">Sim</label>
        </div>
        <div>
          <input
            type="radio"
            id="nao"
            name="avColeta"
            onClick={() => {
              setRegularidade(false)
            }}
          />
          <label htmlFor="sim">Não</label>
        </div>
      </div>
      <div className="self-start mx-4 my-2">Avalie o serviço:</div>
      <div className="">
        <select
          name="nota"
          id="id"
          className="border-2 h-full text-xs mx-4 align-text-top rounded-xl shadow-md w-full"
        >
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </div>
      <div>Dê sugestões de melhoria para o serviço</div>
      <input
        type="text"
        placeholder="Ex.: Em 22/05/2021 a coleta não ocorreu..."
        className="border-2 h-full text-xs mx-4 flex-1 align-text-top rounded-xl shadow-md w-full px-4"
        onChange={(e) => {
          setSugestion(e.target.value)
        }}
      ></input>
      <button className={buttonClass} onClick={sendEvaluation}>
        Enviar
      </button>
    </>
  )

  if (isFinished) {
    body = (
      <>
        <Image
          src="/icons/fim-av.svg"
          alt="fim da avaliação"
          height="283px"
          width="283px"
          className="flex-1"
        />
        <p className="mb-28">Obrigado pela sua avaliação!</p>
      </>
    )
  }

  return <Layout title="Avaliações">{body}</Layout>
}
