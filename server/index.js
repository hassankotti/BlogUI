import path from "path";
import fs from "fs";

import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router";

import App from "../src/App";

const PORT = process.env.PORT || 3006;
const app = express();

app.get("/", (req, res) => {
  const context = {};
  // get HTML string from the `App` component
  let appHTML = ReactDOMServer.renderToString(
    <StaticRouter location={req.originalUrl} context={context}>
      <App />
    </StaticRouter>
  );
  const app = ReactDOMServer.renderToString(<App />);
  const indexFile = path.resolve("./dist/index.html");

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`)
    );
  });
});

app.use(express.static("./dist"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
