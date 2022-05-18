const fs = require('fs');
const VendMachine = require('../controller/authCtrl');

const anaylseLog = (path, machineUID, devName) => {
    fs.readFileSync(path, 'utf-8').split(/\r?\n/).forEach( async function(line) {
        let datetime = line.slice(0, 23);
        // let 
        // card transaction
        let machine = await VendMachine.findOne({ machineUID : machineUID });
        let log = {};
        // log.datetime = datetime;
        // log.text = line;
        // machine.logs.push(log);
        // machine.save();
        console.log(machineUID)
        if ( /TXN_GET1: [0-9]{4}/.test(line) ) {
            let info = line.slice(42, line.length);
            let list = info.split(',');
            
        }
    });
}

module.exports = {
    anaylseLog
}