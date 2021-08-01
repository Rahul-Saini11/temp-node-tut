const os = require('os')

//info about current user
const user = os.userInfo();
console.log(user)

//method retuthern the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} second`)
const  currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOs);