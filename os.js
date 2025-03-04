const os = require("node:os");

function getComputerData() {
  const hostname = os.hostname();
  const freeMemory = convertFromBytesToGB(os.freemem());
  const totalMemory = convertFromBytesToGB(os.totalmem());
  const usedMemory = totalMemory - freeMemory;

  return { hostname, usedMemory, totalMemory };
}

function convertFromBytesToGB(int) {
  return int / Math.pow(1024, 3);
}

module.exports = getComputerData;
