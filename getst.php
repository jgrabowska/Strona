<!DOCTYPE html>
<html>
<head>
<style>
table {
  width: 100%;
  border-collapse: collapse;
}

table, td, th {
  border: 1px solid black;
  padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
//$q = intval($_GET['q']);
$ST = $_POST['st'];
$Nazwa = $_POST['nazwa'];
$Nr_seryjny = $_POST['nr_seryjny'];
$con = mysqli_connect('localhost','root','toor','magazyn');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"magazyn");
$sql="SELECT * FROM stn WHERE st LIKE '%".$ST."%' AND Nazwa LIKE '%".$Nazwa."%'";
$result = mysqli_query($con,$sql);

echo "<table>
<tr>
<th>ST</th>
<th>Nazwa</th>
<th>Nr seryjny</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['ST'] . "</td>";
  echo "<td>" . $row['Nazwa'] . "</td>";
  echo "<td>" . $row['Nr_seryjny'] . "</td>";
  echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>