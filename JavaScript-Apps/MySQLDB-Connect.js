/*
 CREATE TABLE employees (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50),
  location varchar(50),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO employees (id, name, location) VALUES
(1, 'Jasmine', 'Australia'),
(2, 'Jay', 'India'),
(3, 'Jimu', 'Germany'),
(4, 'Raghav', 'MP');

*/Install thje dependency
////npm install -g mysql
//Install mysql module globally/locally
//npm install -g mysql  or npm install mysql
//In case of global npm link mysql
//npm install -g mysql

//npm link mysql

var mysql = require("mysql");

// create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MyRootPass123",
  database:"userdb"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
   }
  console.log('DB Connection established');
});


 var employee = { name: 'baba', location: 'Pune' };
 con.query('INSERT INTO employees SET ?', employee, function(err,res){
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});

con.query("SELECT * FROM employees",function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  //console.log(rows);

for (var i = 0; i < rows.length; i++) {
  console.log(rows[i].name);
    };
  });

//Update
con.query(
  'UPDATE employees SET location = ? Where ID = ?',
  ["South Africa", 5],
  function (err, result) {
    if (err) throw err;
    console.log('Changed ' + result.changedRows + ' rows');
  }
);

 con.query(
  'DELETE FROM employees WHERE id = ?',
  [5],
  function (err, result) {
    if (err) throw err;

    console.log('Deleted ' + result.affectedRows + ' rows');
  }
);

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});