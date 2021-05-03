<?php

$url = "https://www.superheroapi.com/api.php/293138438933439/";

$i = 1;
$curl = curl_init($url.$i);
curl_setopt($curl, CURLOPT_URL, $url.$i);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$resp = curl_exec($curl);
curl_close($curl);

echo $resp;