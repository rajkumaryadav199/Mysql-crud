const mysql=require("mysql");
const connect=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Rajkumar@123",
    database:"crud"
});

module.exports=connect;