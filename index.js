const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const port = 4000;
app.listen(port,() => {
    console.log("Server listening on port",port);
})

//-- POST --

// 1. 회원가입 
app.use('/users',require('./routes/userRouter')); // 회원가입 
app.use('/users/login',require('./routes/loginRouter')); // 로그인 
app.use('/users',require('./routes/profileRouter')); // 프로필 생성 AND 프로필 비밀번호 설정 (PATCH) : keyword 식별 , 프로필 비밀번호 검증
//app.use('/evaluations/:profileIdx'); // 콘텐츠 평가 및 취소

///-- GET --/
//app.use('/profiles/:userldx'); // 회원 전체 프로필 조회
app.use('/likes/:profileIdx',require('./routes/likeRouter')); // 내가 찜한 콘텐츠 조회 
//app.use('/searches'); // 최다 검색 조회
//app.use('/categories/main'); // 메인 카테고리 조회
//app.use('/categories/series'); //  시리즈 카테고리 조회
//app.use('/categories/movie'); // 영화 카테고리 조회 
//app.use('/evaluations/:profileIdx?contentIdx'); // 콘텐츠 평가 조회
//app.use('/hot/:profileIdx'); // 모두의 인기 콘텐츠 조회
//app.use('/topSeries/:profileIdx'); // Top 10 시리즈 조회
//app.use('/topMovies/:profileIdx'); //  Top 10 영화 조회 
//app.use('/movies/:profileIdxx'); // 영화 상세 페이지 조회
//app.use('/series/:profileIdx'); //  시리즈 상세 페이지 조회 

///-- PATCH --/
app.use('/users/pwd'); // 회원 비밀번호 변경 

///-- PUT --/
//app.use('/profiles/:profileIdx'); // 프로필 설정 변경