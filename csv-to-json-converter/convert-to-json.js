const fs = require('fs');
const path = require('path');

let buff = [];

let CSVcontent = fs.readFileSync(path.join(__dirname,'customer-data.csv'),'utf-8');

function splitAny(data,separator){  
  return data.split(separator);
}

function converCSVToJson(data){
  let dataToArr = splitAny(data, '\n');
  let propNameArr = splitAny(dataToArr[0],',');
  let propValueArr = dataToArr.splice(1);
  let temp = {};
  let res  = [];
  propValueArr = propValueArr.map((item) => {
    return splitAny(item, ',');
  });

  propValueArr.forEach((item) => { 
  for(let i = 0; i<=propNameArr.length-1; i++){
    temp[propNameArr[i]] = item[i];
  }
  res.push(Object.assign({},temp));
  });
  return res;
}

let jsonData = JSON.stringify(converCSVToJson(CSVcontent),null,2);

fs.writeFile(path.join(__dirname,'customer-data.json'),jsonData,(err, data) => {
  if(err){
  	throw err;
  }
})




