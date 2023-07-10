var express = require('express');
var app  = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'katore',
    password:'Fumane@Katleho4', //empty for window
    database: 'wellness'
});
var server = app.listen(1355, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("start");
});
con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
  });
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  app.post('/post', (req, res) => {
    // Extract data from the request body
    const { name,surname,username,dateofbirth,email,password } = req.body;
    // Insert data into the database
    const query1 = 'INSERT INTO signuptable VALUES (?,?,?,?,?,?)'[name,surname,username,dateofbirth,email,password];
    // Perform any necessary operations
    db.query(query1, [name, surname, username, dateofbirth, email, password], (err, result) => {
        if (err) {
            // Handle the error appropriately, such as sending an error response
            res.status(500).json({ error: 'An error occurred while inserting user data' });
          } else {
            // Perform any necessary operations after successful insertion
            res.json({ message: 'User data inserted successfully' });
          }
        });
  });
  app.get('/user', function(req, res){
    con.query('select * from signuptable', function(error, rows, fields){
          if(error) console.log(error);
  
          else{
              console.log(rows);
              res.send(rows);
  
          }

        }
);

// app.listen(1354, () => {
//   console.log('Server is running on port 1354');
// });
  });
