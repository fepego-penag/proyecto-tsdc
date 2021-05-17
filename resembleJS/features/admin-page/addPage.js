const compareImages = require("resemblejs/compareImages")
const config = require("../../config.json");
const fs = require('fs');

const { options } = config;

async function executeTest() {

    //Configuración primer escenario
    let resultInfo = {}
    let numPasos = 5;

    if (!fs.existsSync(`../../results/admin-page/addPage.js`)) {
        fs.mkdirSync(`../../results/admin-page/addPage.js`, { recursive: true });
    }

    
    
    const data = await compareImages(
        fs.readFileSync(`../../../cypress/screenshots/ghost-30/admin-page/addPage.js/Actions -- Check if new page appears on list.png`),
        fs.readFileSync(`../../../cypress/screenshots/ghost-34/admin-page/addPage.js/Actions -- Check if new page appears on list.png`),
        options
    );

    resultInfo[0] = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime
    }
    fs.writeFileSync(`../../results/admin-page/addPage.js/compare-Actions -- Check if new page appears on list.png`, data.getBuffer());
    //fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo));
    //fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;
}

(async () => console.log(await executeTest()))();