const Cell = ({ rowIndex, colIndex, rowLength, editClue, children }) => {
    const setValue = () => {
      editClue([rowIndex, colIndex]);
    };
  
    const isThirdCol = (colIndex + 1) % 3 === 0 && colIndex !== rowLength - 1;
    const isThirdRow = (rowIndex + 1) % 3 === 0;
  
    return (
      <div
        onClick={setValue}
        className="select-none bg-gray-700 w-[4vh] h-[4vh] flex justify-center items-center text-4xl outline-1 outline-black"
        style={{
          marginRight: isThirdCol ? "0.5rem" : "0",
          marginBottom: isThirdRow ? "0.5rem" : "0",
        }}
      >
        {children}
      </div>
    );
  };

export default Cell

