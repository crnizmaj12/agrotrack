<?php
header('Content-Type:application/json');


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "entain";

// Create connection
$conn = mysqli_connect($servername,$username,$password,$dbname) or die("Connection failed: " . mysqli_connect_error());

$sql = "SELECT * FROM Table2";
$result = mysqli_query($conn,$sql);
$data = array();
foreach ($result as $row){
    $data[] = $row;
}

echo json_encode($data);