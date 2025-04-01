const ClearButton = (props) => {

    const clear = () => {
        props.clearThePuzzle()
    }

    return <div onClick={clear} className="bg-gray-700 w-1/3 flex justify-center items-center text-3xl outline-1 outline-black">
        <p className="m-4">Clear</p>
</div>
}

export default ClearButton