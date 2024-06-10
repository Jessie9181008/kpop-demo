// app.js

const express = require('express');
const app = express();

// 預定義的內容列表
const contents = [
    "內容1",
    "內容2",
    "內容3",
    "內容4",
    "內容5"
];

// 路由: 返回隨機內容
app.get('/random-content', (req, res) => {
    const randomIndex = Math.floor(Math.random() * contents.length);
    const randomContent = contents[randomIndex];
    res.send(randomContent);
});

// 監聽端口
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
