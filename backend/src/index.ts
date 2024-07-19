import "express-async-errors";
import express from "express";
import cors from "cors";
import router from "./router";
import errorHandling from "./middlewares/errorHandling";
import path from 'path';

const PORT = 3000;
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend_static/dist')));

app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend_static/dist', 'index.html'));
});

app.use(router);

app.use(errorHandling);

app.listen(PORT, () => {
  console.log('listem on Port: ', PORT);
});
