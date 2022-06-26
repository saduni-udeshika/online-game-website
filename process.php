<?php
//linking configuration file
require 'config.php';
$firstName = $_POST["playerName"];
$secondName = $_POST["playerSName"];
$mail = $_POST["email"];
$password = $_POST["playerPW"];

//insert values to data base
$sql = "INSERT INTO signup (email, FirstName, SecondName, password ) VALUES ('$mail', '$firstName', '$secondName', '$password')";
//execute query
if(mysqli_query($con, $sql)){
    //print alert
    //echo "<script>alert('Sign Up successfully')</script>";
    header("Location:index.html");
}
else{
    echo "<script>alert('Sorry!user details are invalid')</script>";
}

//close data base connection
mysqli_close($con);
?>
