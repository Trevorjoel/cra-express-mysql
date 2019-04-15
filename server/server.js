const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'nodeapp',
    password : 'nodeapp',
    database : 'qualification',
    port: 3307
});

connection.connect((err) =>{
    if (err){
        console.log(err);
    }
    console.log('connected....')
});



    connection.query('SELECT empFirstName FROM qualification.employee WHERE empDepartmentID = 2',
        function (error, results, fields) {
        if (error) throw error;

        console.log('The results are: ', results);
            app.post('/api/sql', (req, res) => {

                res.send(
                    {  database1: results,}
                );
            });
            app.get('/api/sql', (req, res) => {
                res.send({ database1: results,
                });

            });
});







app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello it is Express back-end',
    });

});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your  request. This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`LISTENING on port ${port}`));