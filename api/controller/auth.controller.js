const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function signup(req, res)
{
    try
    {
        User.findOne({email:req.body.email})
            .then (user => {
                if (user == null)
                {
                    req.body.password = bcrypt.hashSync(req.body.password, 10);
                    User.create(req.body)
                        .then (user => {
                            const payload = {email: req.body.email, password: req.body.password};
                            const token = jwt.sign(payload, process.env.SECRET, {expiresIn: "1h"});
                            res.locals.user = user;
                            res.status(200).json({message: "User Created", id: user._id, token: token, email: req.body.email, rol: user.rol});
                        })
                        .catch(err => {res.status(500).json(err)})
                }
                else
                {
                    res.status(500).json({message: "Email already in use"})
                }
            })
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
}

async function login (req, res)
{
    try
    {
        const user = await User.findOne({ email: req.body.email});
        if (!user)
        {
            return res.status(401).send("Email or password incorrect")
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err)
            {
                return res.status(500).send(err)
            }
            if (!result)
            {
                return res.status(401).send("Email or password incorrect");
            }
            const payload = {email: req.body.email, password: req.body.password};
            const token = jwt.sign(payload, process.env.SECRET, {expiresIn: "1h"});
            res.locals.user = user;
            return res.status(200).json({message: "Successfully logged in", id: user._id, token: token, email: req.body.email, rol: user.rol, name: user.name})
        })
    }
    catch(err)
    {

    }
}

module.exports = {
    signup,
    login
}