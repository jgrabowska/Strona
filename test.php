<?php
// Fetching Values From URL
$ST = $_POST['ST'];
$Nazwa = $_POST['Nazwa'];
$Nr_seryjny = $_POST['Nr_seryjny'];
$connection = mysqli_connect("localhost", "root", ""); // Establishing Connection with Server..
$db = mysqli_select_db($connection,'magazyn'); // Selecting Database

$sql="SELECT * FROM stn WHERE st LIKE '%".$ST."%'";
$result = mysqli_query($con,$sql);
echo "JESTEM TU";
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

mysqli_close($connection); // Connection Closed
?>