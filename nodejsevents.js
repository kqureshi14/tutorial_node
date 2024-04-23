const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter{

}

const myEmitter = new MyEmitter();

myEmitter.on('MilKBoilledAndOverFlowed',()=>{
    console.log('Please turn off the burner! event occurred!');


    setTimeout(()=>{
        console.log('Please turn off the burner! Its a gentle reminder!.');

    },3000);

})


console.log('Mom is doing her work....')
myEmitter.emit('MilKBoilledAndOverFlowed');

console.log('Mom making lunch for everyone..')


