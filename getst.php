<!DOCTYPE html>
<html>
<head>
<style>

</style>
</head>
<body>

<?php
$q = ($_GET['q']);
$con = mysqli_connect('localhost','root','','magazyn');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}
mysqli_select_db($con,"magazyn");
$sql="SELECT * FROM stn WHERE st LIKE '%".$q."%' OR nazwa LIKE '%".$q."%' OR nr_seryjny LIKE '%".$q."%' OR osoba_poz LIKE '%".$q."%' OR wydano LIKE '%".$q."%' OR do_zwrotu LIKE '%".$q."%' OR konserwacja LIKE '%".$q."%'";

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
while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['ST'] . "</td>";
  echo "<td>" . $row['Nazwa'] . "</td>";
  echo "<td>" . $row['Nr_seryjny'] . "</td>";
  echo "<td>" . $row['Osoba_poz'] . "</td>";
  echo "<td>" . $row['Wydano'] . "</td>";
  echo "<td>" . $row['Do_zwrotu'] . "</td>";
  echo "<td>" . $row['Notatki'] . "</td>";
  echo "<td>" . $row['Konserwacja'] . "</td>";
  echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>