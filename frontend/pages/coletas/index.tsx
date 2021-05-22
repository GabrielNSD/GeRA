import React from "react";
import dynamic from "next/dynamic";

export default function Coletas() {
  const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
    ssr: false
  });
  return (
    <div>
      <h1>Coletas</h1>
      <div>
        <MapWithNoSSR initialLocation={["-5.9231", "-35.2677"]}/>
      </div>
    </div>
  );
}
