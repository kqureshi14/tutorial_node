const path = require('path');



const a1 = path.basename('/Users/apple');

const b2 = path.dirname('/Users/apple');

const b3 = path.extname(__filename);


console.log(a1);


console.log(b2);

console.log(__filename, b3);
