import { app } from "app";

const port = 3333;

app.listen(port, () => {
  console.log(`[SERVER RUNNING]: listening on port: ${port}`);
});
