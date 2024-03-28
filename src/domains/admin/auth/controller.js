import passport from "passport";
import jwt from "jsonwebtoken";
import {db} from "../../../config/db.js";
import {users} from "../../../db/schema/users.js";
import bcrypt from "bcrypt";

const login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {

        if (err) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
        if (!user) {
            return res.status(401).json({ message: info.message || 'Incorrect username or password.' });
        }

        // If authentication succeeds, generate and send a JWT token
        const token = generateJWTToken(user)
        res.json({token});
    })(req, res, next);
}
const register = async (req, res) => {
    try {
        const {username, email, password, name, phone} = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the user data into the users table
        await db.insert(users).values({
            username,
            email,
            password: hashedPassword,
            name,
            phone
        }).execute();

        return res.status(200).json({success: true, message: 'User registered successfully.'});
    } catch (error) {
        return res.status(301).json({success: false, message: 'Failed to register user.'});
    }
};

const generateJWTToken = (user) => {
    const payload = {
        id: user.id,
        username: user.username,
        iss: process.env.APP_URL,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export {login, register}