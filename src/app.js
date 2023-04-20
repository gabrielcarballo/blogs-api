const express = require('express');
const { loginRouter } = require('./routes/login.routes');
const { userRouter } = require('./routes/user.routes');
const { categoriesRoute } = require('./routes/categories.route');
const { blogPostRouter } = require('./routes/blogPost.routes');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/', loginRouter);
app.use('/', userRouter);
app.use('/', categoriesRoute);
app.use('/', blogPostRouter);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
