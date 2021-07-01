const os = require('os')

// info about current user
const user = os.userInfo()

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem()/Math.pow(2,20).toString() + ' MB',
    freeMem: os.freemem()/Math.pow(2,20).toString() + ' MB'
}
console.log(currentOS);
console.log(os.userInfo());