import express from 'express';
import dotenv from "dotenv";
import products from './data/products';
import connectDB from "./config/db";
import productRoutes from "./route/productRoutes";
import {notFound, errorHandler} from "./middleware/errorMiddleware";

//const express = require('express'); 
//const dotenv =  require('dotenv');
//const connectDB = require('./config/db');
//const products = require('./data/products');
//const productRoutes = require('./routes/productRoutes');
//const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config()

connectDB()

const app = express();

app.get('/', (req, res) => {
  res.send("API is running....")
})

app.use("/api/products", productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))