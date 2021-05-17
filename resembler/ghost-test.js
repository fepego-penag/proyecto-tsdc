const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const dir= './results/ghost';
const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest(){

    let resultInfo = {}
    if (fs.existsSync(dir)){
        var filesLength = fs.readdirSync(dir).length
        if(filesLength) {
            if(filesLength % 2 !== 0) {
                console.log('wrong number of images cannot compare');
            } else {
                var i = 0;
                for(i =1; i< filesLength /2 +1; i++) {
                    const data =  await compareImages(
                        fs.readFileSync(`${dir}/before-GH${i}.png`),
                        fs.readFileSync(`${dir}/after-GH${i}.png`),
                        options
                    );
                    resultInfo[i] = {
                        isSameDimensions: data.isSameDimensions,
                        dimensionDifference: data.dimensionDifference,
                        rawMisMatchPercentage: data.rawMisMatchPercentage,
                        misMatchPercentage: data.misMatchPercentage,
                        diffBounds: data.diffBounds,
                        analysisTime: data.analysisTime
                    }
                    fs.writeFileSync(`${dir}/compare-$GH${i}.png`, data.getBuffer());
                }
            }
        }
        
    }else {
        console.log("no images found");
    }
    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
}

(async ()=>console.log(await executeTest()))();
