import React from "react";
import dynamic from "next/dynamic";

export default function Coletas() {
  const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
    ssr: false,
  });
  return (
    <>
      <h1>Coletas</h1>
      <div>
        <MapWithNoSSR />
      </div>
    </>
  );
}
