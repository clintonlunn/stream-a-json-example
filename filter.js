const Filter = require('stream-json/filters/Filter');
const fs = require('fs');

// our data stream:
// {total: 123456789, meta: {...}, data: [...]}
// we want to remove all properties but 'data':
// {data: [...]}

console.log("i am starting the process");

const pipeline = fs.createReadStream('sample.json')
  .pipe(Filter.withParser({filter: 'data'}));

pipeline.on('data', data => console.log(data));


console.log("End of process");
