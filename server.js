/*
In Express, words with a colon in front of them in the url are treated as variables. You can access the value of each variable through `req.params`.


*/

const express = require('express');
const app = express();


app.get(
    '/users/:id',
    (req, res) => {
        console.log(req.params.id);
        res.json(
            {success: true,
             message: 'got one user',
             users: req.params.id}
        )
    }
)

app.listen(
    8000,
    () => {
        console.log("server is running");
    }
)
