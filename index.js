let fs = require('fs');
// let readStream = fs.createReadStream('../io-printKeyboard/README.md', 'utf8');
let readStream = fs.createReadStream(process.argv[3], 'utf8');
// let word = 'localhost'
let word = process.argv[2];
let chunkNumber = 1;
let wordCounter = 0;



readStream.on('data', chunk => {
    console.log(`Reading chunk ${chunkNumber}`);
    // let str = chunk.includes(word);
    // let str = chunk.split('localhost');
    // console.log(str)
    chunkNumber++;
    // console.log(str);
    // if (str === true)
    // wordCounter++;
    let arr = chunk.toLowerCase().split(word);
    wordCounter += arr.length-1
});


// readStream.on('data', chunk => {
//     console.log(`Reading chunk ${chunkNumber}`);
//        let str = chunk.split(' ');
//     // console.log(str)
//     chunkNumber++;
//     // console.log(str);
//    console.log(str.length-1);
// });

readStream.on('end', chunk => {                   
    console.log('End of data');
    console.log(`Number of chunks: ${chunkNumber-1}`);
    console.log(`Found ${word}: ${wordCounter} times`);
});

// readStream.on('error', er => {                   
//     console.log(er);
    
// });                                          //um Fehler zu finden
