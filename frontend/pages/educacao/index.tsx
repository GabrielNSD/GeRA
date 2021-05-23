import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

import Backdrop from "../../components/Backdrop/Backdrop"
import InfoModal from "../../components/Modal/InfoModal"
import Layout from "../../components/layout/PageLayout"

const InfoData = {
  organicos: {
    imageUrl: "",
    textContent:
      "Organicos Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum",
    content: (
      <div className="flex flex-col items-center">
        <div className="p-4 py-2 my-2 w-52 bg-primary rounded-2xl shadow-md flex justify-around">
          <Image
            src="/icons/fruits.svg"
            alt="Saiba mais sobre resíduos orgânicos"
            width="30px"
            height="30px"
          />
          Orgânicos
        </div>
        <div>
          <p>
            Resíduos orgânicos são materiais de origem biológica, seja animal ou
            vegetal. Para destinar corretamente esse tipo de resíduo, aposte na
            compostagem.
          </p>
          <p>
            A compostagem pode ser feita através de composteira doméstica
            utilizando, ou não, minhocas em recipiente plástico fechado. Essa
            técnica destina o lixo, proporciona húmus (adubo orgânico) e
            biofertilizante líquido, além de diminuir a emissão de gases
            poluentes na atmosfera.
          </p>
          <div className="flex-1 justify-self-center place-self-center">
            <Image
              src="/images/composteira.png"
              alt="composteira"
              height="105px"
              width="105px"
            />
          </div>
          <p>
            As composteiras em sua maioria são formadas por três ou mais caixas
            empolháveis de plástico, de acordo com a produção de material
            orgânico. As caixas do topo da pilha são responsáveis pela
            decomposição por meio do trabalho das minhocas e as caixas seguintes
            armazenam chorume produzido no processo.
          </p>
          <p>
            Há inúmeros modelos de composteiras no mercado, escolha asua de
            acordo com a sua necessidade e espaço. Uma de suas vantagens é a
            pela possibilidade de ser realizada e casas, apartamentos e
            empreendimentos comerciais.
          </p>
        </div>
      </div>
    ),
  },
  reciclaveis: {
    imageUrl: "",
    textContent:
      "Reciclaveis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum",
    content: (
      <div className="flex flex-col items-center">
        <div className="p-4 py-2 my-2 w-52 bg-primary rounded-2xl shadow-md flex justify-around">
          <Image
            src="/icons/reciclar.svg"
            alt="Saiba mais sobre recicláveis"
            width="30px"
            height="30px"
          />
          Recicláveis
        </div>
        <div>
          <p>
            Resíduos recicláveis são capazes de passar pelo processo de
            transformação. Nesse processo o resíduo pode voltar para o seu
            estado original ou se transformar em outro produto.
          </p>
          <p>
            Os resíduos recicláveis separados e armazenados corretamente devem
            estar limpos e secos e, só então, devem seguir para o armazenamento.
          </p>

          <p>
            Para facilitar a armazenagem os resíduos devem ser separados através
            das cores, que definem sua classificação:
          </p>
          <ul>
            <li>Azul: papel/papelão</li>
            <li>Vermelho: plástico</li>
            <li>Verde: vidro</li>
            <li>Amarelo: metal</li>
            <li>Preto: madeira</li>
            <li>Laranja: resíduos perigosos</li>
            <li>Branco: resíduos dos serviços de saúde</li>
            <li>Roxo: resíduos radioativos</li>
            <li>Marrom: resíduos orgânicos</li>
            <li>Cinza: resíduo geral não reciclável</li>
          </ul>
          <p>
            Para o correto armazenamento não misture os resíduos recicláveis com
            os orgânicos. Os resíduos recicláveis devem ser lavados e secados
            antes de armazenar. Papéis devem estar secos e não podem ser
            amassados, somente dobrados.
          </p>
          <div className="flex-1 justify-self-center place-self-center">
            <Image
              src="/images/seletiva.png"
              alt="composteira"
              height="105px"
              width="250px"
            />
          </div>
        </div>
      </div>
    ),
  },
  rejeitos: {
    imageUrl: "",
    textContent:
      "Rejeitos Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum",
    content: (
      <div className="flex flex-col items-center">
        <div className="p-4 py-2 my-2 w-52 bg-primary rounded-2xl shadow-md flex justify-around">
          <Image
            src="/icons/delete.svg"
            alt="Saiba mais sobre rejeitos"
            width="30px"
            height="30px"
          />
          Rejeitos
        </div>
        <div>
          <p>É importante diferenciar resíduos de rejeitos.</p>
          <p>
            Resíduos são materiais que ainda podem ter aproveitamento. Como os
            resíduos orgânicos e recicláveis.
          </p>

          <p>
            Já os rejeitos são os resíduos sólidos que, depois de esgotadas
            todas as possibilidades de tratamento e recuperação pelos processos
            tecnológicos disponíveis e economicamente viáveis, não apresentam
            outra possibilidade que não a disposição final ambientalmente
            adequada.
          </p>

          <p>
            O destino mais comum para rejeitos domésticos são os aterros
            sanitários os quais têm um custo de destinação associado e geram um
            impacto ambiental ainda que menor se comparado a outras desposições
            finais, Por isso é muito importante separar bem os resíduos dos
            rejeitos para que o mínimo possível de materiais vá para os aterros.
          </p>

          <p>
            Nos casos em que não for economicamente viável dispor os rejeitos em
            aterros sanitários, poderão ser adotadas outras soluções alinhadas
            às normas estabelecidas pelos órgãos competentes, de modo a a
            reduzir os impactos ambientais e evitar danos ou riscos à saúde
            pública e à segurança.
          </p>

          <p>
            É responsabilidade de todos minimizar o volume de resíduos sólidos e
            rejeitos gerados seja nas casas, comércios e indústrias.
          </p>
        </div>
      </div>
    ),
  },
  separacao: {
    imageUrl: "",
    textContent:
      "Separação Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum",
      content: (
        <div className="flex flex-col items-center">
          <div className="p-4 py-2 my-2 w-52 bg-primary rounded-2xl shadow-md flex justify-around">
            <Image
              src="/icons/box.svg"
              alt="Saiba mais sobre separação"
              width="30px"
              height="30px"
            />
            Recicláveis
          </div>
          <div>
            <p>
              Resíduos recicláveis são capazes de passar pelo processo de
              transformação. Nesse processo o resíduo pode voltar para o seu
              estado original ou se transformar em outro produto.
            </p>
            <p>
              Os resíduos recicláveis separados e armazenados corretamente devem
              estar limpos e secos e, só então, devem seguir para o armazenamento.
            </p>
  
            <p>
              Para facilitar a armazenagem os resíduos devem ser separados através
              das cores, que definem sua classificação:
            </p>
            <ul>
              <li>Azul: papel/papelão</li>
              <li>Vermelho: plástico</li>
              <li>Verde: vidro</li>
              <li>Amarelo: metal</li>
              <li>Preto: madeira</li>
              <li>Laranja: resíduos perigosos</li>
              <li>Branco: resíduos dos serviços de saúde</li>
              <li>Roxo: resíduos radioativos</li>
              <li>Marrom: resíduos orgânicos</li>
              <li>Cinza: resíduo geral não reciclável</li>
            </ul>
            <p>
              Para o correto armazenamento não misture os resíduos recicláveis com
              os orgânicos. Os resíduos recicláveis devem ser lavados e secados
              antes de armazenar. Papéis devem estar secos e não podem ser
              amassados, somente dobrados.
            </p>
            <div className="flex-1 justify-self-center place-self-center">
              <Image
                src="/images/seletiva.png"
                alt="composteira"
                height="105px"
                width="250px"
              />
            </div>
          </div>
        </div>
      ),
  },
}

export default function Educacao() {
  const [infoModalOpen, setInfoModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(InfoData.organicos.content)

  const backdropClickhandler = () => {
    setInfoModalOpen(false)
  }

  let backdrop
  if (infoModalOpen) {
    backdrop = <Backdrop click={backdropClickhandler} />
  }

  return (
    <Layout title="Informações">
      {backdrop}
      <InfoModal content={modalContent} isOpen={infoModalOpen} />
      <div className="flex flex-col justify-between flex-1">
        <div className="px-8 pt-2 text-xs pt-10">
          Você sabe quais são os principais tipos de resíduos sólidos e como
          separá-los como separá-los corretamente?
        </div>
        <div className="flex justify-between p-2 ">
          <div className="px-4 pl-8 text-xs self-end">
            Escolha uma das opções abaixo e saiba mais:
          </div>
          <div>
            <Image
              src="/icons/i.svg"
              alt="informações"
              width="90px"
              height="125px"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-24">
        <div
          className="p-4 py-2 my-2  w-52 bg-gray-50 rounded-md shadow-md flex justify-around"
          onClick={() => {
            setModalContent(InfoData.organicos.content)
            setInfoModalOpen((prevState) => !prevState)
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
            setModalContent(InfoData.reciclaveis.content)
            setInfoModalOpen((prevState) => !prevState)
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
            setModalContent(InfoData.rejeitos.content)
            setInfoModalOpen((prevState) => !prevState)
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
            setModalContent(InfoData.separacao.content)
            setInfoModalOpen((prevState) => !prevState)
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
    </Layout>
  )
}
