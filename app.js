const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// 路由
const userRoutes = require('./routes/users');
const currencyRoutes = require('./routes/currencies');

app.use('/api/users', userRoutes);
app.use('/api/currencies', currencyRoutes);

app.get('/api', (req, res) => {
  res.send('Currency Exchange API');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});