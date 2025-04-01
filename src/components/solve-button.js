const SolveButton = (props) => {

    const solve = () => {
        props.solveThePuzzle()
    }

    return <div onClick={solve} className="select-none bg-gray-700 w-1/3 flex justify-center items-center text-3xl outline-1 outline-black">
        <p className="m-4">Solve</p>
</div>
}

export default SolveButton