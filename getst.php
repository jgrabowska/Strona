<?php
$q = ($_GET['q']);
$con = mysqli_connect('localhost','root','','magazyn');
$i=0;
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}
mysqli_select_db($con,"magazyn");

if ($q == '*'){
	$sql="SELECT * FROM stn";
}else{
	$sql="SELECT * FROM stn WHERE st LIKE '%".$q."%' OR nazwa LIKE '%".$q."%' OR nr_seryjny LIKE '%".$q."%' OR osoba_poz LIKE '%".$q."%' OR wydano LIKE '%".$q."%' OR do_zwrotu LIKE '%".$q."%' OR konserwacja LIKE '%".$q."%'";
}


$result = mysqli_query($con,$sql);

echo "<table class='w3-table-all'>
<tr>
<th>ST</th>
<th>Nazwa</th>
<th>Nr seryjny</th>
<th>Osoba pożyczająca</th>
<th>Wydano</th>
<th>Do zwrotu</th>
<th>Notatki</th>
<th>Konserwacja</th>
</tr>";
foreach ($result as $row) {
  $i++;
  echo "<tr>";
  echo "<td>" . $row['ST'] . "</td>";
  echo "<td>" . $row['Nazwa'] . "</td>";
  echo "<td>" . $row['Nr_seryjny'] . "</td>";
  echo "<td>" . $row['Osoba_poz'] . "</td>";
  echo "<td>" . $row['Wydano'] . "</td>";
  echo "<td>" . $row['Do_zwrotu'] . "</td>";
  echo "<td>" . $row['Notatki'] . "</td>";
  echo "<td>" . $row['Konserwacja'] . "</td>";
  echo "<td><button class='w3-button w3-border' data-toggle='modal' data-target='#edit-employee-modal' data-id='" . $row['id'] . "'>Edytuj</button> <button class='w3-button w3-border btn-delete-employee' data-id='" . $row['id'] . "' typle='button'>Usuń</button></td></td>";
  echo "</tr>";
}

echo "</table>";
mysqli_close($con);
?>
