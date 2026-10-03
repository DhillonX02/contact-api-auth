import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from './Routes/user.js'
import contactRouter from './Routes/contact.js'

const app = express();

app.use(bodyParser.json());

// user Router
app.use("/api/user", userRouter);

// contact Router
app.use('/api/contact',contactRouter)

// home route
app.get("/", (req, res) => {
  res.json({ message: "This is home route working" });
});

mongoose
  .connect(
    "mongodb+srv://sumitmewali2006_db_user:Jaat%40200617@cluster0.hrdtaph.mongodb.net/",
    { dbName: "NodeJs_Mastery_Course" },
  )
  .then(() => console.log("MongoDb connected..!"))
  .catch((err) => console.log(err));

const port = 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));
