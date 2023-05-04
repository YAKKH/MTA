const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

/* ======== PASSPORT SETUP =========== */
const router = express.Router();
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
/* =================================== */

/*
  This allows the server to store session data between each request, which allows the user to keep their authentication status. 
*/
router.use(session({
  secret: 'ilovemta',
  resave: false,
  saveUninitialized: true
}));

router.use(passport.initialize());
router.use(passport.session());

/* Auth strategy from github package.
    Callback URL -> URL Endpoint the  user is sent back to by Github Auth. Path must match a defined route.
*/
passport.use(new GitHubStrategy({
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: process.env.callbackURL
},
  function (accessToken, refreshToken, profile, done) {
    /* Profile -  is an object with all the information Github is willing to share with our application. */
    // console.log(profile);

    return done(null, profile);
  }
));

router.use("/", (req, res, next) => {
  console.log("REQUEST USER:  ", req.user);
  return next()
})

/*
  serializeUser - called once per login session.
  deserializeUser - called everytime after that.
    -> Keeps session data small. deserializeUser  retrieves the user's information stored in session and stores in the request object. Which explains how the req.user property is automatically generated for you. 
*/
passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
});

/*
  If successful authentication, send user back to home page `/` route. If not send to a loginFailed page or somewhere else.
*/
router.get('/authcallback', passport.authenticate('github', {
  successRedirect: "/",
  failureRedirect: "/loginFailed"
}));


router.get('/auth', passport.authenticate('github'), (req, res, next) => {
  console.log("REQUEST USER: ", req.user.id);
  return next();
});

module.exports = router;
