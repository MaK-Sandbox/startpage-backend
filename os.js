const os = require("node:os");

function getComputerData() {
  const username = os.userInfo()["username"];
  const hostname = os.hostname();
  const shell = os.userInfo()["shell"];
  const osName = os.version();
  const machine = os.machine();
  const freeMemory = convertFromBytesToGB(os.freemem());
  const totalMemory = convertFromBytesToGB(os.totalmem());
  const usedMemory = totalMemory - freeMemory;
  const uptime = os.uptime();
  const ip4 = os.networkInterfaces()["Wi-Fi"][3].address;
  const cpus = os.cpus();
  const release = os.release();

  return {
    machine: `${username}@${hostname}`,
    ip4,
    OS: `${osName} ${release} ${machine}`,
    uptime: convertSecondsToString(uptime),
    shell,
    cpu: `${cpus[0].model.trim()} (${cpus.length}) @ ${cpus[0].speed} MHz)`,
    memory: `${usedMemory.toFixed(2)}GB / ${totalMemory.toFixed(2)}GB`,
  };
}

function convertSecondsToString(seconds) {
  let tempSeconds = seconds;
  let days = Math.floor(tempSeconds / (60 * 60 * 24));
  tempSeconds -= days * (60 * 60 * 24);
  let hours = Math.floor(tempSeconds / (60 * 60));
  tempSeconds -= hours * (60 * 60);
  let minutes = Math.floor(tempSeconds / 60);
  tempSeconds -= minutes * 60;

  return `${days} days, ${hours} hours, ${minutes} mins`;
}

function convertFromBytesToGB(int) {
  return int / Math.pow(1024, 3);
}

module.exports = getComputerData;
