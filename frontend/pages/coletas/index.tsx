import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Tabs, TabPanels, TabList, TabPanel, Tab } from "@reach/tabs";
import axios from "axios";
import "@reach/tabs/styles.css";

import { returnInsideZone } from "../../utils/zones";

export default function Coletas() {
  const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
    ssr: false,
  });

  const [polygons, setPolygons] = useState([]);
  const [userLocation, setUserLocation] = useState(["-7.2156", "-48.2456"]);
  const [userZone, setUserZone] = useState("1");
  const [allSchedule, setAllSchedule] = useState<Array<any>>([]);
  const [crTable, setcrTable] = useState([""]);

  console.log("user zone ", userZone);
  console.log("schedule  ind ", crTable);

  const retrieveZones = async () => {
    //event.preventDefault();
    const resulArray: Array<any> = [];
    const schedule: Array<any> = [];

    try {
      const result = await axios.get(
        "http://localhost:1337/zonas?_sort=nome:asc"
      );

      console.log("result ", result);
      result.data.map((item: any) => {
        resulArray.push([
          item.nome,
          item.geometria.geometry.coordinates[0].map(
            ([lat, long]: [number, number]) => [long, lat]
          ),
        ]);
        schedule.push({
          nome: item.nome,
          coleta_caminhao: item.coleta_caminhao,
          coleta_seletiva: item.coleta_seletiva,
        });
      }); //resultArray = [["13". [lat, long]]]

      console.log(resulArray);
      console.log(
        "Teste zonas ",
        returnInsideZone(["-7.2156", "-48.2456"], resulArray)
      );
      setUserZone(returnInsideZone(userLocation, resulArray));
      console.log("schedules array ", schedule);
      setAllSchedule(schedule);
      setPolygons(resulArray);
    } catch (e) {
      return;
    }
  };

  const mountCRTable = () => {
    setcrTable(allSchedule.filter((item: any) => item.nome === userZone));
  };
  useEffect(() => {
    retrieveZones();
    mountCRTable();
  }, []);

  useEffect(() => {
    mountCRTable();
  }, [userZone]);

  return (
    <>
      <h1>Dias de coleta de resíduos na sua região</h1>
      <div style={{ width: "80vw" }}>
        <MapWithNoSSR
          initialLocation={["-7.2156", "-48.2456"]}
          polygons={polygons}
        />
      </div>{" "}
      <Tabs>
        <TabList>
          <Tab>
            <h2>Caminhão</h2>
          </Tab>
          <Tab>
            <h2>Seletiva</h2>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {allSchedule.map(({ nome, coleta_caminhao }) => (
              <React.Fragment key={nome}>
                <div>Rota {nome}</div>
                {coleta_caminhao
                  .map(
                    ({ dia, turno }: { dia: string; turno: string }) =>
                      `${dia} - ${turno}`
                  )
                  .join("; ")}
              </React.Fragment>
            ))}
          </TabPanel>
          <TabPanel>
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
  );
}
