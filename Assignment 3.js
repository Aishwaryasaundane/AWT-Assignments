const fs=require('fs');


const inputfile = 'intput.txt';
const outputfile = 'output.txt';

fs.writeFile('intput.txt', '2,5,6,7,8,5', function(err){
    if (err)throw err;
    console.log('file created successfully');
});

fs.readFile(inputfile,'utf8',(err,data)=>{
    if(err){
        console.error('error in reading file');
        return;
    }

    const numbers = data.split(',').map(Number);

    const cubeNumbers = numbers.map(num=> Math.pow(num,3));

    const outputText = cubeNumbers.join(',');

    fs.writeFile(outputfile, outputText,(err)=>{

    });
});