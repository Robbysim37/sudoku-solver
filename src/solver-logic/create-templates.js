// the value is column, the index is row, index will be index + 1 to create 1x1, 1x2, etc.

export const solutionTemplates = {
    ones: [null,null,null,null,null,null,null,null,null],
    twos: [null,null,null,null,null,null,null,null,null],
    threes: [null,null,null,null,null,null,null,null,null],
    fours: [null,null,null,null,null,null,null,null,null],
    fives: [null,null,null,null,null,null,null,null,null],
    sixes: [null,null,null,null,null,null,null,null,null],
    sevens: [null,null,null,null,null,null,null,null,null],
    eights: [null,null,null,null,null,null,null,null,null],
    nines: [null,null,null,null,null,null,null,null,null]
}

export const clueLayout = [
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

export const convertClueLayoutToClueTemplates = (clueLayout) => {

    const clueTemplate = solutionTemplates

    clueLayout.forEach((row,rowIndex) => row.forEach((col,colIndex) => {
        if(col !== null){
            switch (col) {
                case "1":
                    clueTemplate.ones[rowIndex] = colIndex
                    break;
                case "2":
                    clueTemplate.twos[rowIndex] = colIndex
                    break;
                case "3":
                    clueTemplate.threes[rowIndex] = colIndex
                    break;
                case "4":
                    clueTemplate.fours[rowIndex] = colIndex
                    break;
                case "5":
                    clueTemplate.fives[rowIndex] = colIndex
                    break;
                case "6":
                    clueTemplate.sixes[rowIndex] = colIndex
                    break;
                case "7":
                    clueTemplate.sevens[rowIndex] = colIndex
                    break;
                case "8":
                    clueTemplate.eights[rowIndex] = colIndex
                    break;
                case "9":
                    clueTemplate.nines[rowIndex] = colIndex
                    break;
                default:    
            }
        }
    }))

    return clueTemplate
}

let templates = []

export const createAllNumberTemplates = () => {
    templates = []
    createAllTemplates([])
    console.log(templates.length)
    return [
        {name: "ones", templates: templates},
        {name: "twos", templates: templates},
        {name: "threes", templates: templates},
        {name: "fours", templates: templates},
        {name: "fives", templates: templates},
        {name: "sixes", templates: templates},
        {name: "sevens", templates: templates},
        {name: "eights", templates: templates},
        {name: "nines", templates: templates},
    ]
}

const createAllTemplates = (inProgressTemplate) => {
    if(inProgressTemplate.length === 9){
        templates.push(inProgressTemplate)
    }else{
        const removedPreviousColumns = [0,1,2,3,4,5,6,7,8].filter(val => !inProgressTemplate.includes(val))
        const boxRow = (inProgressTemplate.length) % 3
        if(boxRow > 0){
            const removedSameBox = removedPreviousColumns.filter(currPosibility => 
                inProgressTemplate.slice(-boxRow)
                .every(previousBoxValue => Math.floor(currPosibility / 3) !== Math.floor(previousBoxValue / 3)))
            removedSameBox.forEach(val => createAllTemplates([...inProgressTemplate, val]))
        }else{
            removedPreviousColumns.forEach(val => createAllTemplates([...inProgressTemplate, val]))
        }
    }
}