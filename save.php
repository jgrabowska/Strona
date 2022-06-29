<?php
	$request = $_REQUEST;
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

	$sql = "INSERT INTO stn (ST, Nazwa, Nr_seryjny, Osoba_poz, Wydano, Do_zwrotu, Notatki, Konserwacja)
	VALUES ('".$ST."', '".$Nazwa."', '".$Nr_seryjny."', '".$Osoba_poz."', '".$Wydano."', '".$Do_zwrotu."', '".$Notatki."', '".$Konserwacja."')";

	if ($mysqli->query($sql)) {
	  echo "Środekt trwały został pomyślnie dodany.";
	} else {
	  return "Błąd: " . $sql . "<br>" . $mysqli->error;
	}

	$mysqli->close();
?>