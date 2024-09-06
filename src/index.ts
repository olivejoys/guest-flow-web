import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, 'localhost', (err?: Error) => {
  if (err) {
    console.error('Error starting server:', err.message);
    process.exit(1);
  }
  console.log(`Server is running at http://localhost:${PORT}`);
});
