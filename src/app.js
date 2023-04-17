const express = require('express');
const { loginRouter } = require('./routes/login.routes');
const { userRouter } = require('./routes/user.routes');
const { categoriesRoute } = require('./routes/categories.route');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/', loginRouter);
app.use('/', userRouter);
app.use('/', categoriesRoute);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
