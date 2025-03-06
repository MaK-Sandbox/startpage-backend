const { token } = require("./kimai-config.json");

async function fetchKimaiActivity() {
  try {
    const response = await fetch(
      "https://kimai.gueney.eu/api/timesheets/active",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (err) {
    return new Error(`Error fetching data: ${err}`);
  }
}

module.exports = fetchKimaiActivity;
