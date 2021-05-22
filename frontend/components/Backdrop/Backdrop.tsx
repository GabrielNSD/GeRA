interface BackdropProps {
    click: any;
  }
  
  const Backdrop = (props: BackdropProps) => (
    <div
      className="fixed w-full h-full bg-black bg-opacity-25 z-10 top-0 left-0"
      onClick={props.click}
    />
  );
  
  export default Backdrop;