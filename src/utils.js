const { Strategy: GitHubStrategy } = require('passport-github2')


const strategy = new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile)
})

const sessionConfig = {
    secret: 'codecademy',
    resave: false,
    saveUnitialized: false
}

const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/login')
}


module.exports = {
    strategy,
    sessionConfig,
    ensureAuthenticated
}