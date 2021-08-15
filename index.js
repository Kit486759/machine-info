const os = require('os')

function machineInfo(){

const hostName = os.hostname()
const osArch = os.arch()
const cpuModel = os.cpus()[0].model
const cpuCores = os.cpus().length
const ram = `${Math.round(os.totalmem() / 1024 / 1024)} Mb`
const ip = checkIp()

console.log(`Machine host name: ${hostName}`)
console.log(`Machine os architecture: ${osArch}`)
console.log(`Machine cpu model: ${cpuModel} with ${cpuCores}cores`)
console.log(`Machine ram: ${ram}`)
console.log(ip)
}

const checkIp = () => {
    // console.log(os.networkInterfaces())
    const ipObject = os.networkInterfaces()
    for (const name of Object.keys(ipObject)) {
        if (name !== 'Wi-Fi') {
            for (const net of ipObject[name]) {
                if (net.family === 'IPv4' && !net.internal) {
                   return (`Machine ip address: ${net.address}`)
                }
            }
        }
    }
}



module.exports.machineInfo = machineInfo;