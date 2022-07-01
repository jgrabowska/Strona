<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "magazyn";
	$request = $_REQUEST;
	$szukaj = $request['Szukaj'];
	
	$mysqli = new mysqli($servername, $username, $password, $dbname);

	if ($mysqli->connect_errno) {
	  echo "Błąd: " . $mysqli->connect_error;
	  exit();
	}
	if (!isset($szukaj)) {
		$szukaj = "*";
	}
	$sql = "SELECT * FROM stn WHERE ST LIKE '%" .$szukaj ."%' OR Nazwa LIKE '%" .$szukaj ."%' OR Nr_seryjny LIKE '%" .$szukaj ."%' OR Osoba_poz LIKE '%" .$szukaj ."%' OR Wydano LIKE '%" .$szukaj ."%' OR Do_zwrotu LIKE '%" .$szukaj ."%' OR Notatki LIKE '%" .$szukaj ."%' OR Konserwacja LIKE '%" .$szukaj ."%';";
	$results = $mysqli->query($sql);
	$row = $results->fetch_all(MYSQLI_ASSOC);

	$results->free_result();

	$mysqli->close();

	echo json_encode($row);
?>