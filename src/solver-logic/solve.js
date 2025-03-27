import { convertClueLayoutToClueTemplates, createAllNumberTemplates } from "./create-templates"

const solvePuzzle = (clueLayout) => {
    const clueTemplate = convertClueLayoutToClueTemplates(clueLayout)
    const numberTemplatesArr = createAllNumberTemplates()
    const possibleTemplates = checkClues(clueTemplate, numberTemplatesArr)
    const solution = comparePossibilitiesIntoSolution(possibleTemplates)
    console.log(solution)
}

const checkClues = (clueTemplate,numberTemplatesArr) => {
    numberTemplatesArr.forEach( number => {
        number.templates = number.templates.filter(currTemplate => {
            let isValid = true
            for(const [key, value] of Object.entries(clueTemplate)){
                const clueCol = value
                if(number.name === key){
                    currTemplate.forEach((col, row) => {
                        if(clueCol[row] !== col && clueCol[row] !== null){
                            isValid = false
                        }
                    })
                }else{
                    currTemplate.forEach((col, row) => {
                        if(clueCol[row] === col){
                            isValid = false
                        }
                    })
                }
            }
            return isValid
        })
    })
    return numberTemplatesArr
}

const comparePossibilitiesIntoSolution = (possibleTemplates) => {
    possibleTemplates = possibleTemplates.sort((a,b) => b.templates.length - a.templates.length)

    console.log(possibleTemplates)

    const solutions = possibleTemplates[0].templates

    for(let i = 1 ; i < possibleTemplates.length ; i++){
        solutions.filter(currSolutionTemplate => {
            let isValid = true
            possibleTemplates[i].templates.forEach(currPossibleTemplate => {
                currPossibleTemplate.forEach((col,row) => {
                    if(currSolutionTemplate[row] === col){
                        isValid = false
                    }
                })
            })

            return isValid
        })
    }

    return solutions
}

export {solvePuzzle}