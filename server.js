var express = require('express');
var app = express();

app.use(express.static("public"));

app.listen(8081, () => {
    console.log("Server is running at port 8081");
})