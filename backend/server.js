const dotenv = require('dotenv')
const express = require('express');

dotenv.config();

const todosRoutes = require('./routes/todos');
const app = express();

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/todos', todosRoutes);

app.listen(process.env.PORT, () => {
  console.log('server listeting on port', process.env.PORT);
});