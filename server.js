/*
In Express, words with a colon in front of them in the url are treated as variables. You can access the value of each variable through `req.params`.

In order to make POST requests, first we need to include the "body-parser" library from our node_modules (included with express).


*/
const bodyParser = require('body-parser');
const express = require('express');
const app = express();


app.use(bodyParser.json());

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

app.post('/login',function(req,res){
	// Typically passwords are encrypted using something like `bcrypt` before sending to database
	const username=req.body.username;
	const password=req.body.password;

	// This should come from the database
	const mockUsername="billyTheKid";
	const mockPassword="superSecret";

	if (username===mockUsername && password===mockPassword){
		// In practice, use JSON web token sign method here to make an encrypted token
		res.json({
			success: true,
			message: 'password and username match!',
			token: 'encrypted token goes here'
		})
	} else {
		res.json({
			success: false,
			message: 'password and username do not match'
		})
	}

})

app.listen(
    8000,
    () => {
        console.log("server is running");
    }
)
