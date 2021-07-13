import express from 'express';

const app = express();

app.get('/', (_, res) => res.json({ message: '👋🌍' }))

app.listen(3333, () => console.log('Running at http://localhost:3333'));
