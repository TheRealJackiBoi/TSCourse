"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var logUser = function (user) { return console.log(user); };
axios_1.default.get("https://jsonplaceholder.typicode.com/users/1")
    .then(function (res) { return logUser(res.data); })
    .catch(function (err) { return console.log(err); });
axios_1.default.get("https://jsonplaceholder.typicode.com/users")
    .then(function (res) { return console.log(res.data); })
    .catch(function (err) { return console.log(err); });
