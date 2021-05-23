interface InfoMadalProps {
    content: any;
    isOpen: boolean
}


export default function InfoModal(props: InfoMadalProps) {
    let modalClasses = "h-1/2 bg-white shadow-md fixed -bottom-full w-1/2 z-20  pl-4 transform translate-y-full transition-transform duration-300 ease-out"

    if(props.isOpen) {
        modalClasses = "rounded-2xl h-3/4 md:h-1/2 bg-white shadow-md fixed left-1/5 md:left-1/4 top-16 md:top-1/4 w-3/4 md:w-1/2 z-20  p-2 transform translate-x-0 flex overflow-scroll text-sm"
    }
    return (<div className={modalClasses}>{props.content}</div>)
}