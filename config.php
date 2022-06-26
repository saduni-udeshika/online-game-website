<?php
//the connection object
$con = new mysqli("localhost", "root" , "", "forwar");
//check connection
if($con-> connect_error){
    die("connection failed" .$con->connect_error);
}
else{
    echo  "Connected successfully";
}
?>