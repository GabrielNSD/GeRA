import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Tabs, TabPanels, TabList, TabPanel, Tab } from "@reach/tabs";

import { returnInsideZone } from "../../utils/zones";

export default function Coletas() {
  const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
    ssr: false,
  });

  const [polygons, setPolygons] = useState([["1", [-7.2158, -48.2456]]]);
  const [userLocation, setUserLocation] = useState(["-7.2156", "-48.2456"]);
  const [userZone, setUserZone] = useState("1");
  const [allSchedule, setAllSchedule] = useState<Array<any>>([]);
  const [crTable, setcrTable] = useState([""]);

  console.log("user zone ", userZone);
  console.log("schedule  ind ", crTable);

  const retriveZones = async () => {
    //event.preventDefault();
    const resulArray: Array<any> = [];
    const schedule: Array<any> = [];

    const res = await fetch("http://localhost:1337/zonas", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    const result = await res.json();
    console.log("result ", result);
    result.map((item: any) => {
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
  };

  const mountCRTable = () => {
    setcrTable(allSchedule.filter((item: any) => item.nome === userZone));
  };
  useEffect(() => {
    retriveZones();
    mountCRTable();
  }, []);

  useEffect(() => {
    mountCRTable();
  }, [userZone]);

  return (
    <>
      <div className="h-screen w-screen">
        <Tabs>
          <TabPanels>
            <TabPanel>Dias de coleta seletiva na sua região </TabPanel>
            <TabPanel>
              <h3>Dias de coleta de resíduos na sua região</h3>{" "}
              <div className="w-4/5 border-2 border-black rounded-xl">
                {" "}
                {/* essa tabela deveria ser alimentada pelo schedule, mas ele funciona de forma itermitente */}
                Dias de coleta: Segunda, Terça, Sábado <br />
                Turno: manhã
              </div>
            </TabPanel>
          </TabPanels>
          <TabList>
            <Tab>Seletiva</Tab>
            <Tab>Resíduos</Tab>
          </TabList>
        </Tabs>
        <div className="h-3/4 w-3/4">
          <MapWithNoSSR
            initialLocation={["-7.2156", "-48.2456"]}
            polygons={polygons}
          />
        </div>
      </div>
    </>
  );
}
