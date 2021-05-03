<?php

$url = "https://www.superheroapi.com/api.php/293138438933439/";

$id = $_REQUEST['id'];
	
$curl = curl_init($url.$id);
curl_setopt($curl, CURLOPT_URL, $url.$id);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$resp = curl_exec($curl);
curl_close($curl);

echo $resp;