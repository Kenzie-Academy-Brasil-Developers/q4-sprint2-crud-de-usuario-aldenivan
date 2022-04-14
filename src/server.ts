import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";
import { PORT } from "./configs";

createConnection()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Appp running port ${PORT}`));
  })
  .catch((error: any) => console.log(error));
