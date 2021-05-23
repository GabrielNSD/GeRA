import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import axios from "axios"
import { Tabs, TabPanels, TabList, TabPanel, Tab } from "@reach/tabs"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure"
import "@reach/tabs/styles.css"

import { returnInsideZone } from "../../utils/zones"

export default function Coletas() {
  const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
    ssr: false,
  })

  const [polygons, setPolygons] = useState([])
  const [userLocation, setUserLocation] = useState([-7.191166, -48.202622])
  const [userZone, setUserZone] = useState(null)
  const [allSchedule, setAllSchedule] = useState<Array<any>>([])
  const [crTable, setcrTable] = useState(null)

  if (typeof window !== "undefined") {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(success)
    } else {
      setUserLocation([-7.191166, -48.202622])
    }
  }

  function success(position: {
    coords: { latitude: number; longitude: number }
  }): void {
    setUserLocation([position.coords.latitude, position.coords.longitude])
  }

  console.log("user zone ", userZone)
  console.log("schedule  ind ", crTable)

  const retrieveZones = async () => {
    //event.preventDefault();
    const resulArray: Array<any> = []
    const schedule: Array<any> = []

    try {
      const result = await axios.get(
        "http://localhost:1337/zonas?_sort=nome:asc"
      )

      console.log("result ", result)
      result.data.map((item: any) => {
        resulArray.push([
          item.nome,
          item.geometria.geometry.coordinates[0].map(
            ([lat, long]: [number, number]) => [long, lat]
          ),
        ])
        schedule.push({
          nome: item.nome,
          coleta_caminhao: item.coleta_caminhao,
          coleta_seletiva: item.coleta_seletiva,
        })
      }) //resultArray = [["13". [lat, long]]]

      setUserZone(returnInsideZone(userLocation, resulArray))

      setAllSchedule(schedule)
      setPolygons(resulArray)
    } catch (e) {
      return
    }
  }

  const mountCRTable = () => {
    setcrTable(allSchedule.find((item: any) => item.nome === userZone))
  }

  useEffect(() => {
    retrieveZones()
    mountCRTable()
  }, [])

  useEffect(() => {
    mountCRTable()
  }, [userZone])

  return (
    <>
      <h1>Dias de coleta de resíduos na sua região</h1>
      <div
        className="bg-white rounded shadow-md relative -bottom-full z-20 p-1 mt-4 mb-8"
        style={{ width: "90vw", height: "50vh" }}
      >
        <MapWithNoSSR
          initialLocation={userLocation}
          polygons={polygons}
          centerMarker="fixed"
        />
      </div>
      <Tabs className="flex flex-1 flex-col">
        <TabList className="tablist bg-primary flex flex-row flex-1 h-4 justify-evenly flex-grow-0">
          <Tab>
            <h2>Caminhão</h2>
          </Tab>
          <Tab>
            <h2>Seletiva</h2>
          </Tab>
        </TabList>

        <TabPanels className="p-4">
          <TabPanel>
            {allSchedule.find((item: any) => item.nome === userZone)
              ?.coleta_caminhao.length > 0
              ? `A coleta em sua localização atual (Rota ${userZone}) ocorre nos seguintes dias/horários: ${allSchedule
                  .find((item: any) => item.nome === userZone)
                  .coleta_caminhao.map(
                    ({ dia, turno }: { dia: string; turno: string }) =>
                      `${dia} - ${turno}`
                  )
                  .join("; ")}`
              : "Não há cobertura de coleta de resíduos domiciliares na sua localização atual"}
            <Disclosure>
              <DisclosureButton className="bg-primary rounded-lg text-gray-800 m-4 p-2">
                Veja todas as rotas de coleta de resíduos domiciliares
              </DisclosureButton>
              <DisclosurePanel>
                {allSchedule.map(({ nome, coleta_caminhao }) => (
                  <div
                    className="border-primary border-b-2 border-opacity-50"
                    key={nome}
                  >
                    <div>Rota {nome}</div>
                    {coleta_caminhao
                      .map(
                        ({ dia, turno }: { dia: string; turno: string }) =>
                          `${dia} - ${turno}`
                      )
                      .join("; ")}
                  </div>
                ))}
              </DisclosurePanel>
            </Disclosure>
          </TabPanel>
          <TabPanel>
            {allSchedule.find((item: any) => item.nome === userZone)
              ?.coleta_seletiva.length > 0
              ? ""
              : "Não há cobertura de coleta seletiva na sua localização atual"}
            {allSchedule
              .filter(({ coleta_seletiva }) => coleta_seletiva.length > 0)
              .map(({ nome, coleta_seletiva }) => (
                <React.Fragment key={nome}>
                  <div>Rota {nome}</div>
                  {coleta_seletiva
                    .map(
                      ({ dia, turno }: { dia: string; turno: string }) =>
                        `${dia} - ${turno}`
                    )
                    .join("; ")}
                </React.Fragment>
              ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
