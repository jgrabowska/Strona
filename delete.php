<?php
	$request = $_REQUEST;
	$id = $request['id'];

	$servername = "localhost"; 
	$username = "root";
	$password = "";
	$dbname = "magazyn";

	$mysqli = new mysqli($servername, $username, $password, $dbname);

	if ($mysqli->connect_errno) {
	  echo "Błąd: " . $mysqli->connect_error;
	  exit();
	}

	$sql = "DELETE FROM stn WHERE id='".$id."'";

	if ($mysqli->query($sql)) {
	  echo "Usunięto rekord";
	} else {
	  echo "Bląd!: " . $sql . "<br>" . $mysqli->error;
	}

	$mysqli->close();
?>