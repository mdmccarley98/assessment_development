const fs = require("fs").promises;

process.on("uncaughtException", (err) => {
  console.log(`Caught exception: ${err}`);
  process.exit(1);
});

async function createCSV() {
  try {
    const csvHeaders = "driver,team,points";
    await fs.writeFile("formula1.csv", csvHeaders);
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

async function addTeam(driver, team, points) {
  try {
    const csvLine = `\n${driver},${team},${points}`;
    await fs.writeFile("formula1.csv", csvLine, { flag: "a" });
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

async function readCSV() {
  await fs.readFile("fileDoesNotExist.csv");
}
(async function () {
  await createCSV();
  await addTeam("Lewis", "Mercedes", 103);
  await addTeam("Max", "Redbull", 100);
  await readCSV();
})();