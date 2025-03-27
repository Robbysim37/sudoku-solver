import { convertClueLayoutToClueTemplates, createAllNumberTemplates } from "./create-templates"

const solvePuzzle = (clueLayout) => {
    const clueTemplate = convertClueLayoutToClueTemplates(clueLayout)
    const numberTemplatesArr = createAllNumberTemplates()
    const possibleTemplates = checkClues(clueTemplate, numberTemplatesArr)
    console.log(possibleTemplates)
}

const checkClues = (clueTemplate,numberTemplatesArr) => {
    numberTemplatesArr.forEach( number => {
        number.templates = number.templates.filter(currTemplate => {
            let isValid = true
            for(const [key, value] of Object.entries(clueTemplate)){
                if(number.name === key){
                    currTemplate.forEach((col, row) => {
                        if(value[row] !== col && value[row] !== null){
                            isValid = false
                        }
                    })
                }else{
                    currTemplate.forEach((col, row) => {
                        if(value[row] === col){
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

export {solvePuzzle}