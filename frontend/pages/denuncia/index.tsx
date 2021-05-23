import { useEffect, useState } from "react"
import Backdrop from "../../components/Backdrop/Backdrop"
import ModalMap from "../../components/Modal/ModalMap"

import Image from "next/image"
import Layout from "../../components/layout/PageLayout"

export default function Denuncia() {
  const [lat, setLat] = useState("-7.1877")
  const [long, setLong] = useState("-48.2098")

  const [openMap, setOpenMap] = useState(false)

  const [description, setDescription] = useState("")
  const [buttonClass, setButtonClass] = useState(
    "my-4 px-4 bg-gray-400 mx-24 rounded-xl"
  )

  const success = (position: any) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    setLat(latitude)
    setLong(longitude)
  }

  function error() {
    console.log("erro")
  }

  if (typeof window !== "undefined") {
    if (navigator?.geolocation) {
      console.log("tem")
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      console.log("nao tem ")
      setLat("-7.1877")
      setLong("-48.2098")
    }
  }

  const sendComplaint = async () => {
    //event.preventDefault();

    const res = await fetch("http://localhost:1337/denuncias", {
      body: JSON.stringify({
        localizacao: { lat: lat, long: long },
        descricao: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    const result = await res.json()
  }

  const backdropClickHandler = () => {
    setOpenMap(false)
  }

  let backdrop = null

  if (openMap) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  useEffect(() => {
    if (description.length > 49) {
      setButtonClass("my-4 px-4 bg-primary mx-24 rounded-xl")
    }
  }, [description])

  return (
    <Layout title="Denúncias">
      <div className="flex-1 h-full w-screen flex flex-col max-w-screen">
        <ModalMap
          openModalMap={openMap}
          initialLocation={["-7.1877", "-48.2098"]}
        />
        {backdrop}
        <div className="mx-4 text-sm">
          Local reservado para fazer denúncias ou reportar problemas
        </div>
        <div className="flex justify-end">
          <Image
            src="/icons/denuncia-user.svg"
            alt="faça sua denúncia"
            height="184px"
            width="184px"
          />
        </div>
        <div className="flex justify-center mx-4">
          <div
            className=""
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
        </div>
        <div className="mx-4 my-2">Descreva o problema encontrado</div>
        <input
          type="text"
          placeholder="Ex.: Em 22/05/2021 vi em um terreno baldio..."
          className="border-2 h-full text-xs mx-4 flex-1 align-text-top rounded-xl shadow-md"
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        ></input>{" "}
        {/* use [lat,long] for initialLocation instead */}
        <button className={buttonClass} onClick={sendComplaint}>
          Enviar
        </button>
      </div>
    </Layout>
  )
}
