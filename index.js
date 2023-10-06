import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/register.route";

const app = express();
const PORT = 8001;
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

var corsOptions = {
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(route);

async function main() {
  const uri = process.env.DATABASE;
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB!");
    })
    .catch(() => {
      console.log("Could not connect to MongoDB!");
    });
}
main();
