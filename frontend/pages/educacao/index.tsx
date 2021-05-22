import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Backdrop from "../../components/Backdrop/Backdrop";
import InfoModal from "../../components/Modal/InfoModal";

const InfoData = {
  organicos: {
    imageUrl: "",
    textContent:
      "Organicos Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum",
  },
  reciclaveis: {
    imageUrl: "",
    textContent:
      "Reciclaveis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum",
  },
  rejeitos: {
    imageUrl: "",
    textContent:
      "Rejeitos Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum",
  },
  separacao: {
    imageUrl: "",
    textContent:
      "Separação Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum",
  },
};

export default function Educacao() {
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(
    InfoData.organicos.textContent
  );

  const backdropClickhandler = () => {
    setInfoModalOpen(false);
  };

  let backdrop;
  if (infoModalOpen) {
    backdrop = <Backdrop click={backdropClickhandler} />;
  }

  return (
    <>
      {backdrop}
      <InfoModal content={modalContent} isOpen={infoModalOpen} />
      <div className="">
        <div className="px-8 pt-2 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum
        </div>
        <div className="flex justify-between p-2 ">
          <div className="px-4 pl-8 text-xs">
            <ul>
              <li>Lorem ipsum</li> <li>Lorem ipsum</li> <li>Lorem ipsum</li>{" "}
            </ul>
          </div>
          <div>
            <Image
              src="/icons/info.svg"
              alt="informações"
              width="90px"
              height="100px"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div
          className="p-4 py-2 my-2  w-52 bg-gray-50 rounded-md shadow-md flex justify-around"
          onClick={() => {
            setModalContent(InfoData.organicos.textContent);
            setInfoModalOpen((prevState) => !prevState);
          }}
        >
          <Image
            src="/icons/fruits.svg"
            alt="Saiba mais sobre resíduos orgânicos"
            width="30px"
            height="30px"
          />{" "}
          Orgânicos
        </div>
        <div
          className="p-4 py-2 my-2  w-52 bg-gray-50 rounded-md shadow-md flex justify-around"
          onClick={() => {
            setModalContent(InfoData.organicos.textContent);
            setInfoModalOpen((prevState) => !prevState);
          }}
        >
          <Image
            src="/icons/reciclar.svg"
            alt="Saiba mais sobre resíduos orgânicos"
            width="30px"
            height="30px"
          />{" "}
          Recicláveis
        </div>
        <div
          className="p-4 py-2 my-2  w-52 bg-gray-50 rounded-md shadow-md flex justify-around"
          onClick={() => {
            setModalContent(InfoData.organicos.textContent);
            setInfoModalOpen((prevState) => !prevState);
          }}
        >
          <Image
            src="/icons/delete.svg"
            alt="Saiba mais sobre resíduos orgânicos"
            width="30px"
            height="30px"
          />{" "}
          Rejeitos
        </div>
        <div
          className="p-4 py-2 my-2  w-52 bg-gray-50 rounded-md shadow-md flex justify-around"
          onClick={() => {
            setModalContent(InfoData.organicos.textContent);
            setInfoModalOpen((prevState) => !prevState);
          }}
        >
          <Image
            src="/icons/box.svg"
            alt="Saiba mais sobre resíduos orgânicos"
            width="30px"
            height="30px"
          />{" "}
          Separação
        </div>
      </div>
    </>
  );
}
