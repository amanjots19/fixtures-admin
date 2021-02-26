const League = require('../models/createLeague');
const Result  = require('../models/result');

exports.getLeague = (req,res,next) =>{
    res.render('createLeague',{
        path:'/'
    })
};
exports.postLeague=(req,res,next)=>{
    const leagueName = req.body.leagueName;
    const team1 = req.body.team1;
    const team2 = req.body.team2;
    const team3= req.body.team3;
    const team4 = req.body.team4;
    const league = new League(leagueName,team1,team2,team3,team4);
    league.save();
    res.redirect('/fixtures');
};
exports.getfixtures=(req,res,next)=>{
    League.fetchAll((league)=>{
        console.log(league);
        res.render('fixtures',{
            path:'/fixtures',
            detail: league
        });
    });
    
}
exports.postFixtures=(req,res,next)=>{
    const winningTeam1= req.body.teamName1;
    const winningTeam2= req.body.teamName2;
    const winningTeam3= req.body.teamName3;
    const timing1= req.body.timing1;
    const timing2= req.body.timing2;
    const timing3= req.body.timing3;
    const result = new Result(winningTeam1,winningTeam2,winningTeam3,timing1,timing2,timing3);
    result.save();
    res.redirect('/result');
}

exports.getTable=(req,res,next)=>{
    Result.fetchAll((result)=>{
        res.render('result',{
            result:result
        });
    });
}