// const express = require('express');
import express from "express";
import mailRouter from "./routes/mailRoute.js"

const indexRouter = express.Router();
 
// 메인 페이지 출력
// router.get('/', (req, res, next) => {
//     res.render('index', {title: 'Express API Server v1.0'})    
// });
indexRouter.get('/contact', (req, res, next) => {
    res.render('contact', {title: 'Express API Server v1.0'})    
});

indexRouter.get('/', (req, res, next) => {
    res.render('kr') 
});


indexRouter.get('/sena_kr', (req, res, next) => {
    res.render('kr') 
});

indexRouter.get('/sena_en', (req, res, next) => {
    res.render('en') 
});

indexRouter.get('/sena_jp', (req, res, next) => {
    res.render('jp') 
});

// Hello, Node World!!
indexRouter.get('/hello', (req, res, next) => {
    res.send("Hello, Node World!!");
});
 
 
// Request 로 들어온 데이터를 재구성해서 json 데이터로 리턴
indexRouter.post('/echo', (req, res, next) => {        
 
    const resJson = {
        url: req.path,
        method: req.method,
        header: req.headers,
        body: req.body,
        params: req.params,
        query: req.query
    }
 
    res.json(resJson);
});
 

indexRouter.use('/mail', mailRouter);

// 에러 발생시 흐름 확인 용도
indexRouter.get('/error', (req, res, next) => {
    next(new Error('/error api 호출, 에러 발생'));
});
 

// module.exports = router;
export default indexRouter