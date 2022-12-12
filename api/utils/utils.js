const User = require('../models/user.model.js')
const jwt = require('jsonwebtoken')

async function checkAuth (req, res, next)
{
    if (!req.headers.token)
    {
        return res.status(401).send("Token not introduced");
    }
    jwt.verify(req.headers.token, process.env.SECRET, async (err, decoded) => {
        if (err)
        {
            return res.status(500).send("Token not valid")
        }
        const user = await User.findOne({email: decoded.email})
        if (!user)
        {
            return res.status(401).send("Token not valid");
        }
        res.locals.user = user;
        next();
    })
}

module.exports = {checkAuth}