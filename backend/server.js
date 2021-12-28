const express = require("express");
const cors = require("cors");
const db = require("./db/db");

const app = express();

//routers

const signUpRouter = require("./routers/routes/signup");
const loginRouter = require("./routers/routes/login");
const sellerRouter = require("./routers/routes/seller");
const scheduleRouter = require("./routers/routes/schedule");

//built-in middlewares
app.use(express.json());
app.use(cors());

//third-party middleware

//app routers

app.use(signUpRouter);
app.use(loginRouter);
app.use(sellerRouter);
app.use(scheduleRouter);

const PORT = 5000;
/*app.use(PORT, () => {
	console.log(`Server On ${PORT}`);
});*/

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
