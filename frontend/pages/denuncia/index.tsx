import { useState } from "react";
import Backdrop from "../../components/Backdrop/Backdrop";
import ModalMap from "../../components/Modal/ModalMap";

export default function Denuncia() {
  const [lat, setLat] = useState("-7.1877");
  const [long, setLong] = useState("-48.2098");

  const [openMap, setOpenMap] = useState(false);

  const [description, setDescription] = useState("")

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
    {backdrop}
      <h1>Denúncia</h1>
      <div>
        <ModalMap openModalMap={openMap} initialLocation={["-7.1877","-48.2098"]}/> {/* use [lat,long] for initialLocation instead */}
        <button onClick={()=>{setOpenMap(prevState => !prevState)}}>Informar localidade</button>
        <form>
            <label>Descrição</label>
            <input type="text" name="descricao" id="descricao" onChange={(e)=>{setDescription(e.target.value)}}></input>
            <button type="submit" onClick={()=>{sendComplaint()}}>Enviar</button>
        </form>
      </div>
    </>
  );
}
