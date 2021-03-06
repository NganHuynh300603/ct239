const fs = require('fs')
const path = require('path')

const writerFile = (character, wordObject) => {
    try {
        const rawData = fs.readFileSync(
            path.join(
                __dirname,
                __dirname,
                '../data',
                `${character}.json`
            )
        )
        const words = JSON.parse(rawData)
        words.push(wordObject)
        fs.writeFileSync(
            path.join(
                __dirname,
                __dirname,
                '../data',
                `${character}.json`
            ),
            JSON.stringify(words)
        )
    } catch (error) {
        console.log(error);
    }
}

module.exports = {writerFile}