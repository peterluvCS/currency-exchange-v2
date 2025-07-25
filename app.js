const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// 路由
const userRoutes = require('./routes/users');
const currencyRoutes = require('./routes/currencies');

// 挂载路由
app.use('/api/users', userRoutes);
app.use('/api/currencies', currencyRoutes);

// 测试 API 根路径
app.get('/api', (req, res) => {
  res.send('Currency Exchange API is running');
});

// 启动服务
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
