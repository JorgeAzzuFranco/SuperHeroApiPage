<?php

$url = "https://www.superheroapi.com/api.php/293138438933439/search/";
$super = $_REQUEST['super'];
$curl = curl_init($url.$super);
curl_setopt($curl, CURLOPT_URL, $url.$super);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$resp = curl_exec($curl);
curl_close($curl);

echo $resp;
