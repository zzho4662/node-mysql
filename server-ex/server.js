// express : 웹 서버를 동작시키는 프레임워크
const express = require("express");
const dotenv = require("dotenv");

// 라우터 파일 가져온다
const bootcamps = require("./routes/bootcamps");

// 환경설정 파일의 내용을 로딩.
dotenv.config({ path: "./config/config.env" });

// 웹서버 프레임워크인 익스프레스를 가져온다.
const app = express();

//로그 찍는 로거 만든다
const logger = (req, res, next) => {
  req.hello = "Hello World";
  console.log("미들웨어 실행됨");
  next();
};

//미들웨어 연결
app.use(logger);

//라우터 연결 : url의 path와 라우터파일 연결
app.use("/api/v1/bootcamps", bootcamps);

//환경설정 파일인 config.env 파일에 있는 내용을 불러오는 방법
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
