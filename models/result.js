const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "result.json");

const resultFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
module.exports = class Result {
  constructor(teamName1, teamName2, teamName3,timing1, timing2,timing3) {
    this.teamName1 = teamName1;
    this.teamName2 = teamName2;
    this.teamName3 = teamName3;
    this.timing1 = timing1;
    this.timing2 = timing2;
    this.timing3 = timing3;
  }
  save() {
    resultFromFile((result) => {
      result.push(this);
      fs.writeFile(p, JSON.stringify(result), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    resultFromFile(cb);
  }
};
