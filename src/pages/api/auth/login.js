import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.JWT_SECRET;

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        if (username === 'admin' && password ==- 'pass') {
            const token = jwt.sign({ username }, SECRET_KEY, {expiresIn: '1h'});
            res.status(200).json({ token});
        } else {
            res.status(401).json({ error: 'Invalid username or password'});
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
} 