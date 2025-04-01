"use client"

import { clueLayout } from "@/solver-logic/create-templates";
import { solvePuzzle } from "@/solver-logic/solve";
import Cell from "@/components/cell";
import NumberSelector from "@/components/number-selector"
import { useState } from "react";
import SolveButton from "@/components/solve-button";
import ClearButton from "@/components/clear-button";

const createEmptyLayout = () => Array.from({ length: 9 }, () => Array(9).fill(null));

export default function Home() {

  const [clue, setClue] = useState(clueLayout)
  const [currNumber, setCurrNumber] = useState(null)

  const editClue = (pos) => {
    clue[pos[0]][pos[1]] = currNumber
    setClue([...clue])
  }

  const solveThePuzzle = () => {
    
    const solution = solvePuzzle(clue)
    setClue(solution)
  }

  const clearThePuzzle = () => {
    setClue(createEmptyLayout())
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl my-8">Sudoku Solver</h1>
      <div className="h-[80vh] flex flex-col justify-between items-center">
      <div className="w-full overflow-x-hidden">
        <div className="bg-black grid mx-auto gap-x-[0.25rem] gap-y-[0.25rem]"
          style={{ gridTemplateColumns: `repeat(${clue[0].length}, min-content)`}}>
          {clue.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <Cell
              key={`${rowIndex}-${colIndex}`}
              rowIndex={rowIndex}
              colIndex={colIndex}
              rowLength={row.length}
              editClue={editClue}
              >{cell}
        </Cell>
      ))
    )}
  </div>
      </div>
        <div className="grid grid-cols-5 gap-2 h-1/5 w-full">
          <NumberSelector currNumber={currNumber} setCurrNumber={setCurrNumber}>{null}</NumberSelector>
          <NumberSelector currNumber={currNumber} setCurrNumber={setCurrNumber}>1</NumberSelector>
          <NumberSelector currNumber={currNumber} setCurrNumber={setCurrNumber}>2</NumberSelector>
          <NumberSelector currNumber={currNumber} setCurrNumber={setCurrNumber}>3</NumberSelector>
          <NumberSelector currNumber={currNumber} setCurrNumber={setCurrNumber}>4</NumberSelector>
          <NumberSelector currNumber={currNumber} setCurrNumber={setCurrNumber}>5</NumberSelector>
          <NumberSelector currNumber={currNumber} setCurrNumber={setCurrNumber}>6</NumberSelector>
          <NumberSelector currNumber={currNumber} setCurrNumber={setCurrNumber}>7</NumberSelector>
          <NumberSelector currNumber={currNumber} setCurrNumber={setCurrNumber}>8</NumberSelector>
          <NumberSelector currNumber={currNumber} setCurrNumber={setCurrNumber}>9</NumberSelector>
        </div>
        <div className="flex justify-around w-full">
        <SolveButton solveThePuzzle={solveThePuzzle}/>
        <ClearButton clearThePuzzle={clearThePuzzle}/>
        </div>
      </div>
    </div>
  );
}
