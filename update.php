<?php
	$request = $_REQUEST;
	$id = $request['id'];
	$ST = $request['ST'];
	$Nazwa = $request['Nazwa'];
	$Nr_seryjny = $request['Nr_seryjny'];
	$Osoba_poz = $request['Osoba_poz'];
	$Wydano = $request['Wydano'];
	$Do_zwrotu = $request['Do_zwrotu'];
	$Notatki = $request['Notatki'];
	$Konserwacja = $request['Konserwacja'];

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "magazyn";

	$mysqli = new mysqli($servername, $username, $password, $dbname);

	if ($mysqli->connect_errno) {
	  echo "Błąd: " . $mysqli->connect_error;
	  exit();
	}

	$sql = "UPDATE stn SET ST='".$ST."', Nazwa='".$Nazwa."', Nr_seryjny='".$Nr_seryjny."', Osoba_poz='".$Osoba_poz."',Wydano='".$Wydano."',Do_zwrotu='".$Do_zwrotu."',Notatki='".$Notatki."',Konserwacja='".$Konserwacja."' WHERE id='".$id."'";

	if ($mysqli->query($sql)) {
	  echo "Rekord został zaktualizowany";
	} else {
	  echo "Błąd: " . $sql . "<br>" . $mysqli->error;
	}

	$mysqli->close();
?>