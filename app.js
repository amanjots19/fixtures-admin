const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')

const app= express();

app.set('view engine','ejs');
app.set('views','views');

const leagueRoutes= require('./routes/league');
const adminRoutes = require('./routes/admin');
const resultRoutes = require('./routes/result');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(leagueRoutes);
app.use(adminRoutes);
app.use(resultRoutes);


app.listen(3000);