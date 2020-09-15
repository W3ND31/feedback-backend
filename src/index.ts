import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./models";
import routes from "./routes";

require("dotenv").config();

let corsOptions = {
  origin: "http://localhost:3000",
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB Conectado");
  })
  .catch((err) => {
    console.log("Erro na conexão com a DB", err);
    process.exit();
  });

app.listen(process.env.PORT || 8080);
