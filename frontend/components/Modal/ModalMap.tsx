import dynamic from "next/dynamic"

interface ModalMapProps {
  openModalMap: boolean
  initialLocation: Array<string>
}

const ModalMap = (props: ModalMapProps) => {
  const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
    ssr: false,
  })

  let modalClasses =
    "h-1/2 bg-white shadow-md fixed -bottom-full w-1/2 z-20  pl-4 transform translate-y-full transition-transform duration-300 ease-out"

  if (props.openModalMap) {
    modalClasses =
      "rounded-2xl h-1/2 md:h-2/3 bg-white shadow-md fixed left-4 md:left-1/3 top-1/4 md:top-1/4 w-11/12 md:w-1/2 z-20  p-2 transform translate-x-0 flex"
  }

  return (
    <div className={modalClasses}>
      <MapWithNoSSR
        initialLocation={props.initialLocation}
        centerMarker={true}
      />
    </div>
  )
}

export default ModalMap
