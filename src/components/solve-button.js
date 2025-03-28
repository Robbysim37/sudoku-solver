const SolveButton = (props) => {

    const solve = () => {
        props.solveThePuzzle()
    }

    return <div onClick={solve} className="bg-gray-700 w-2/3 flex justify-center items-center text-4xl outline-1 outline-black">
        <p className="m-4">Solve</p>
</div>
}

export default SolveButton