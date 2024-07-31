import bcrypt from 'bcryptjs';
import dbConnect from 
import User from '../../../models/User';

export default function hander(req, res) {
    if (req.method === 'POST') {
        const { username, password, confirmPassword} = req.body;

        // Validation
        if (!username || !password || !confirmPassword) {
            return res.status(400).json({ error: 'All fields are required'});
        }

        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match'});
        }

        // Validation if username is taken
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            return res.status(400).json({ error: 'Username is already taken'});
        }


    }
}