import { MdCancel } from "react-icons/md";

const NumberSelector = (props) => {

    const changeNumber = () => {
        props.setCurrNumber(props.children)
    }

    return <div onClick={changeNumber} id={props.id} 
    className={`${props.currNumber === props.children ? "text-yellow-300" : "text-white"} select-none bg-gray-700 flex justify-center items-center text-4xl`}>
    {props.children ?? <MdCancel size={25}/>}
</div>
}

export default NumberSelector