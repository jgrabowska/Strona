<?php
$q = intval($_GET['q']);
$con = mysqli_connect('localhost','root','','magazyn');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}
mysqli_select_db($con,"magazyn");
echo $q;

$sql="DELETE FROM stn WHERE st='".$q."'";
$result = mysqli_query($con,$sql);

mysqli_close($con);
?>
</body>
</html>