// Create web server using express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let comments = [
  {
    id: 1,