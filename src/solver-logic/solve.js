import { convertClueLayoutToClueTemplates, createAllNumberTemplates } from "./create-templates"

const solvePuzzle = (clueLayout) => {
    const clueTemplate = convertClueLayoutToClueTemplates(clueLayout)
    const numberTemplatesArr = createAllNumberTemplates()
    const possibleTemplates = checkClues(clueTemplate, numberTemplatesArr)
    const solution = comparePossibilitiesIntoSolution(possibleTemplates)
    return convertSolutionIntoDisplay(solution)
}

const convertSolutionIntoDisplay = (solution) => {
    const layout = [
        [null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null]
    ]

    solution.forEach(currSolutionObj => {
        switch (currSolutionObj.name) {
            case "ones":
                currSolutionObj.templates.forEach((col,row) => {
                    layout[row][col] = 1
                })
                break;
            case "twos":
                currSolutionObj.templates.forEach((col,row) => {
                    layout[row][col] = 2
                })
                break;
            case "threes":
                currSolutionObj.templates.forEach((col,row) => {
                    layout[row][col] = 3
                })
                break;
            case "fours":
                currSolutionObj.templates.forEach((col,row) => {
                    layout[row][col] = 4
                })
                break;
            case "fives":
                currSolutionObj.templates.forEach((col,row) => {
                    layout[row][col] = 5
                })
                break;
            case "sixes":
                currSolutionObj.templates.forEach((col,row) => {
                    layout[row][col] = 6
                })
                break;
            case "sevens":
                currSolutionObj.templates.forEach((col,row) => {
                    layout[row][col] = 7
                })
                break;
            case "eights":
                currSolutionObj.templates.forEach((col,row) => {
                    layout[row][col] = 8
                })
                break;
            case "nines":
                currSolutionObj.templates.forEach((col,row) => {
                    layout[row][col] = 9
                })
                break;
            default:    
        }
    })

    return layout

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
    // possibleeNumberTemplates is an array of {name: number, templates: arr of }
    possibleNumberTemplates = possibleNumberTemplates.sort((a,b) => a.templates.length - b.templates.length)

    let solutions = []
    let nextGenSolutions = []

    possibleNumberTemplates[0].templates.forEach(possibleTemplate => {
        solutions.push([{name: possibleNumberTemplates[0].name,templates: possibleTemplate}])
    })

    for(let i = 1; i < possibleNumberTemplates.length; i++){
        possibleNumberTemplates[i].templates.forEach(template => {
            solutions.forEach(solution => {
                let conflicts = conflictLogic(solution,template)
                if(!conflicts){
                    nextGenSolutions.push([...solution, {name: possibleNumberTemplates[i].name, templates: template}])
                }
            })
        })
        solutions = [...nextGenSolutions]
        nextGenSolutions = []
    }

    return solutions[0]
}

const conflictLogic = (solution, incomingTemplate) => {
    for (let solutionTemplate of solution) {
        for (let i = 0; i < incomingTemplate.length; i++) {
            if (solutionTemplate.templates[i] === incomingTemplate[i]) {
                return true; // Conflict found
            }
        }
    }
    return false; // No conflicts
};

export {solvePuzzle}