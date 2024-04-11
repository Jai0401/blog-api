const express = require('express');
const bodyParser = require('body-parser');

const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const commentsRoute = require('./routes/comments');
const imageRoute = require('./routes/images');
const testRoutes = require('./routes/tests');
const categoryRoutes = require("./routes/category");

const app = express();

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use("/posts", postsRoute);
app.use("/user", userRoute);
app.use("/comments", commentsRoute);
app.use("/category", categoryRoutes);
app.use("/images", imageRoute);
app.use("/test", testRoutes);

module.exports = app;
