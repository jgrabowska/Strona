<?php
	$request = $_REQUEST; 
	$id = $request['idst'];
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "magazyn";

	$mysqli = new mysqli($servername, $username, $password, $dbname);

	if ($mysqli->connect_errno) {
	  echo "Błąd: " . $mysqli->connect_error;
	  exit();
	}

	$sql = "SELECT * FROM stn WHERE id='".$id."'";

	$results = $mysqli->query($sql);

	$row = $results->fetch_assoc();

	$results->free_result();

	$mysqli->close();

	echo json_encode($row);
?>