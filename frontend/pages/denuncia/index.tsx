import { useState } from "react";
import Backdrop from "../../components/Backdrop/Backdrop";
import ModalMap from "../../components/Modal/ModalMap";

export default function Denuncia() {
  const [lat, setLat] = useState("-7.1877");
  const [long, setLong] = useState("-48.2098");

  const [openMap, setOpenMap] = useState(false);

  const success = (position: any) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLat(latitude);
    setLong(longitude);
  };

  function error() {
    console.log("erro");
  }

  if (typeof window !== "undefined") {
    if (navigator?.geolocation) {
      console.log("tem");
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("nao tem ");
      setLat("-7.1877");
      setLong("-48.2098");
    }
  }

  const sendComplaint = async (event: any) => {
    event.preventDefault();

    const res = await fetch("http://localhost:1337/denuncias", {
      body: JSON.stringify({
        localizacao: { lat: lat, long: long },
        descricao: event.target.descricao.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
  };

  const backdropClickHandler = () => {
    setOpenMap(false);
  };

  let backdrop = null;

  if (openMap) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <>
      <h1>Denúncia</h1>
    </>
  );
}
