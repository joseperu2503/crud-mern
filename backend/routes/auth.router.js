const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const router = express.Router()

router.post('/login', 
    passport.authenticate('local', {session: false}),
    async (req, res, next) => {
        try {
            const user = req.user;
            const payload = {
                ...user
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET);

            res.json({ user, token });
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router