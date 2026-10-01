import express from 'express'
import mongoose from 'mongoose'

const app = express();


mongoose
  .connect(
    "mongodb+srv://sumitmewali2006_db_user:Jaat%40200617@cluster0.hrdtaph.mongodb.net/",
    { dbName: "NodeJs_Mastery_Course" },
  )
  .then(() => console.log("MongoDb connected..!"))
  .catch((err) => console.log(err));

const port = 5000;
app.listen(port,()=>console.log(`server is running on port ${port}`));