const Cell = (props) => {

    const setValue = () => {
        props.editClue(props.pos)
    }


    return <div onClick={setValue} 
    className={` bg-gray-700 w-[4vh] h-[4vh] flex justify-center items-center text-4xl outline-1 outline-black`}>
        {props.children}
    </div>
}

export default Cell

