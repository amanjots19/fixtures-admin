
const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "league.json"
);

const leagueFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
module.exports = class League {
  constructor(leagueName, team1, team2, team3, team4) {
    this.leagueName = leagueName;
    this.team1 = team1;
    this.team2 = team2;
    this.team3 = team3;
    this.team4 = team4;
  }

  save() {
    leagueFromFile((l) => {
      l.push(this);
      fs.writeFile(p, JSON.stringify(l), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    leagueFromFile(cb);
  }
};

// const p = path.join(
//     path.dirname(require.main.filename),
//     'data',
//     'leagueName.json'
//   );
//   const leagueFromFile = cb => {
//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         cb([]);
//       } else {
//         cb(JSON.stringify(fileContent));
//       }
//     });
//   };
//   module.exports= class League{
//     constructor(name, totalteams){
//         this.leagueName=name;
//         this.teams=totalteams;
//     }
//     save(){
//         leagueFromFile(league => {
//             league.push(this);
//             fs.writeFile(p,JSON.stringify((league),err=>{
//                 console.log(err);
//             }));
//         });
//     }
//     static fetchAll(cb){
//         leagueFromFile(cb);
//     }
//   };
