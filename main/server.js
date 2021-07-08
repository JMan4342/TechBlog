const express = require('express');
const session = require('express-session');
const exphbs  = require('express-handlebars');
const Handlebars = require("handlebars");
const { Sequelize } = require('sequelize');
const mysql = require('mysql2');
require('dotenv').config();
const bcrypt = require('bcrypt');
const connect = require("connect");

const app = express()