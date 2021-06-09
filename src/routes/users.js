import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Gets all the users');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Get user with ID ${id}`);
});

router.post('/', (req, res) => {
    res.send(`Create a new user`);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Edit a user with user ID ${id}`);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Delete a user with ID ${id}`);
});

export default router;