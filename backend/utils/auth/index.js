const passport = require('passport');
const JwtStrategy = require('./strategies/jwt.strategy');
//Require strategy used
const localStrategy = require('./strategies/local.strategy');
//Tell to passport we'll use localStrategy 
passport.use(localStrategy);
passport.use(JwtStrategy)