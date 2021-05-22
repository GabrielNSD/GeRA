import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Tabs, TabPanels, TabList, TabPanel, Tab } from "@reach/tabs";

export default function Coletas() {
  const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
    ssr: false,
  });

  const [polygons, setPolygons] = useState([""]);

  const retriveZones = async () => {
    //event.preventDefault();
    const resulArray: Array<any> = [];

    const res = await fetch("http://localhost:1337/zonas", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    const result = await res.json();
    console.log(result);
    result.map((item: any) =>
      resulArray.push([
        item.nome,
        item.geometria.geometry.coordinates[0].map(
          ([lat, long]: [number, number]) => [long, lat]
        ),
      ])
    );

    console.log(resulArray);
    setPolygons(resulArray);
  };

  useEffect(() => {
    retriveZones();
  }, []);

  return (
    <div className="h-screen w-screen">
      <Tabs>
        <TabPanels>
          <TabPanel>Dias de coleta seletiva na sua região</TabPanel>
          <TabPanel>Dias de coleta de resíduos na sua região</TabPanel>
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
  );
}
