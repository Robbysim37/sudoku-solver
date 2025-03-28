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

const comparePossibilitiesIntoSolution = (possibleNumberTemplates) => {
    possibleNumberTemplates = possibleNumberTemplates.sort((a,b) => a.templates.length - b.templates.length)

    let solutions = []
    let nextGenSolutions = []

    possibleNumberTemplates[0].templates.forEach(possibleTemplate => {
        solutions.push([{name: possibleNumberTemplates[0].name,templates: possibleTemplate}])
    })

    console.log(solutions)

    for(let i = 1; i < possibleNumberTemplates.length; i++){
        possibleNumberTemplates[i].templates.forEach(template => {
            solutions.forEach(solution => {
                let conflicts = conflictLogic(solution,template)
                if(!conflicts){
                    nextGenSolutions.push([[...solution, {name: possibleNumberTemplates[i].name, templates: template}]])
                }
            })
        })
        solutions = [nextGenSolutions]
        nextGenSolutions = []
    }

    return solutions
}

const conflictLogic = (solution, incomingTemplate) => {
    //  solution is an array of {name: string, template: arr[positions]}
    // template is an arr[positions]

        solution.forEach(solutionTemplate => {
            for(let i = 0; i < incomingTemplate.length; i++){
                console.log(solutionTemplate.templates[i] + "===" + incomingTemplate[i])
                if(solutionTemplate.templates[i] === incomingTemplate[i]){
                    console.log("conflict")
                    return true
                }
            }
        })

    return false
}

export {solvePuzzle}