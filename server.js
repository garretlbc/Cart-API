"use strict";

const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const port = 3001;

app.listen(port, () => {
	console.log(`Listening on port: ${port}.`);
});
