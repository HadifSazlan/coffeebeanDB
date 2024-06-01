import passport from "passport";
import jwt from "jsonwebtoken";
const login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (!user) {
            return res.status(401).json({ message: info.message || 'Incorrect username or password.' });
        }
        // If authentication succeeds, generate and send a JWT token
        const token = generateJWTToken(user);
        res.json({ token });
    })(req, res, next);
};
const generateJWTToken = (user) => {
    const payload = {
        id: user.id,
        username: user.username,
        iss: process.env.APP_URL,
    };
    const jwtSecret = process.env.JWT_SECRET;
    if (jwtSecret) {
        return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
    }
};
export { login };
