<?php
header('Content-Type:application/json');


$servername = "sql11.freesqldatabase.com";
$username = "sql11483084";
$password = "sql11483084";
$dbname = "sql11483084";

// Create connection
$conn = mysqli_connect($servername,$username,$password,$dbname) or die("Connection failed: " . mysqli_connect_error());

$sql = "SELECT * FROM TABLE_NAME";
$result = mysqli_query($conn,$sql);
$data = array();
foreach ($result as $row){
    $data[] = $row;
}

echo json_encode($data);