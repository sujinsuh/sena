
import express, { json } from 'express';
import cors from 'cors';
import path from 'path'
import ejs from 'ejs'
import { fileURLToPath } from 'url';
import indexRouter from "./src/index.js"
// var cors = require('cors');
// var express = require('express');



// var path = require('path');
// var indexRouter = require('./src/index');
 
const app = express();


// 템플릿 엔진 디렉토리 설정
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));

// ejs : embedded javaScript Template
// app.engine('html', require('ejs').renderFile);
app.engine('html', ejs.renderFile);
// view 엔진 설정(html 확장자로 된 파일 접근)
app.set('view engine', 'html');
 
 
// 파서 설정

app.use('/public', express.static(path.join(__dirname, 'webflow')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
// 라우터 설정  
app.use('/', indexRouter);
 
// 공통 에러 처리기
app.use(function(err, req, res, next) {    
    console.error(err);
    res.status(500).json({statusCode : res.statusCode, errMessage : err.message});
  });
 
app.listen(80, () => console.log("API Server Start..."));