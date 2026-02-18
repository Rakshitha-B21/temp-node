const os = require('os')
//info about current user
const user = os.userInfo()
console.log(user)
//method returns the system uptime in sec
console.log(`The system uptime is ${os.uptime()} seconds`)
const currentOS={
    name:OS.type(),
    release:os.release(),
    totalMem:OS.totalmem(),
    freeMem:OS.freemem(),
}
console.log(currentOS)
