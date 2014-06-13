var express = require("express");

var answer = function(question, req, res) {
    return "Bodil";
};

var app = express.createServer();
app.use(express.cookieParser());
app.use(express.session({
    "secret": "bodilpwnz"
}));

app.get("/", function(req, res) {
    var q = req.param("q");
    var a = answer(q, req, res);
    console.log("Q: \"" + q + "\" A:\"" + a + "\"");
    res.end(a);
});

app.listen(8000, "127.0.0.1");
console.log("Server running on http://127.0.0.1:8000/");