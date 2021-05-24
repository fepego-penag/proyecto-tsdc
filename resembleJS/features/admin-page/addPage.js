const compareImages = require("resemblejs/compareImages")
const config = require("../../config.json");
const fs = require('fs');

const { options } = config;

async function executeTest() {

    //Configuración del escenario
    let resultInfo = {};
    let feature = "admin-page/addPage.js";
    let pasos = ["Actions -- Check if new page appears on list", 
                "Actions -- click on button New Page",
                "Actions -- Fill form page title",
                "Actions -- Fill username & password then log in",
                "Actions -- Select page administration"];

    if (!fs.existsSync(`../../results/${feature}`)) {
        fs.mkdirSync(`../../results/${feature}`, { recursive: true });
    }

    for (a of pasos){
        const data = await compareImages(
            fs.readFileSync(`../../../cypress/screenshots/ghost-30/${feature}/${a}.png`),
            fs.readFileSync(`../../../cypress/screenshots/ghost-34/${feature}/${a}.png`),
            options
        );

        resultInfo[a] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        }
        fs.writeFileSync(`../../results/${feature}/compare-${a}.png`, data.getBuffer());
    }

    fs.writeFileSync(`../../results/${feature}/report.html`, createReport(feature, resultInfo, pasos ));
    fs.copyFileSync('../../index.css', `../../results/${feature}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;
}

function step(a, info, feature) {
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Step: ${a}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="../../../../cypress/screenshots/ghost-30/${feature}/${a}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="../../../../cypress/screenshots/ghost-34/${feature}/${a}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${a}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(feature, resInfo, pasos) {
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${feature}</p>
            <div id="visualizer">
                ${pasos.map(a => step(a, resInfo[a],feature))}
            </div>
        </body>
    </html>`
}


(async () => console.log(await executeTest()))();