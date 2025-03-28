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
        <div className="bg-black grid grid-cols-9 gap-1">
          {clue.map((row, rowIndex)=> row.map((col,colIndex) => {
            return <Cell rowIndex={rowIndex} colIndex={colIndex} editClue={editClue} pos={[rowIndex, colIndex]} key={`${rowIndex}-${colIndex}`}>{col}</Cell>
          }))}
        </div>
        <div className="grid grid-cols-5 gap-2 h-1/5 w-full">
          <NumberSelector setCurrNumber={setCurrNumber}>{null}</NumberSelector>
          <NumberSelector setCurrNumber={setCurrNumber}>1</NumberSelector>
          <NumberSelector setCurrNumber={setCurrNumber}>2</NumberSelector>
          <NumberSelector setCurrNumber={setCurrNumber}>3</NumberSelector>
          <NumberSelector setCurrNumber={setCurrNumber}>4</NumberSelector>
          <NumberSelector setCurrNumber={setCurrNumber}>5</NumberSelector>
          <NumberSelector setCurrNumber={setCurrNumber}>6</NumberSelector>
          <NumberSelector setCurrNumber={setCurrNumber}>7</NumberSelector>
          <NumberSelector setCurrNumber={setCurrNumber}>8</NumberSelector>
          <NumberSelector setCurrNumber={setCurrNumber}>9</NumberSelector>
        </div>
        <SolveButton solveThePuzzle={solveThePuzzle}/>
        <ClearButton clearThePuzzle={clearThePuzzle}/>
      </div>
    </div>
  );
}
