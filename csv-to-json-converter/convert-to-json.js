const fs = require('fs');
const path = require('path');

let buff=''

const file = fs.readFile(path.join(__dirname,'customer-data.csv'),'utf-8', (error, data) => {
	let dataToArr = data.split('\n');
    let propNameArr = dataToArr[0].split(',');
    let propValueArr = dataToArr.splice(1);
    propValueArr.forEach((item) => {
    	item = item.split(',');
       console.log(item)
    });

   // console.log(propValueArr, propNameArr);
});


