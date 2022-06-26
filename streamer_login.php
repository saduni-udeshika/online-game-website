<?php
//linking configuration file
require 'config.php';
$userEmail = $_POST["userEmail"];
$password = $_POST["pw"];

//Read email and password from the table
$sql = "SELECT email, password FROM signup WHERE email = '".$userEmail . "'";
$result = $con->query($sql);
if ($result){
    while ($row = $result->fetch_assoc()){
        $p = $row['password'];
        if(strcmp($password, $p)){
          echo "PASSWORD_MISMATCH";
        }
        else{
            echo "Success";
            //update user last logIn time
            $time = time();
            $sql = "UPDATE signup SET lastLogIn= ($time)WHERE email='".$userEmail . "'";

            if ($con->query($sql) === TRUE) {
                echo "Record updated successfully";
            } else {
                echo "Error updating record: " . $con->error;
            }
        }
    }
}
else{
    echo "Error";
}

//close data base connection
$con->close();
?>
