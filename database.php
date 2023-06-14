<?php

$host = "localhost";
$dbname = "usuario";
$username = "root";
$password = "";

$mysqli = new mysqli(hostname: $host,
username: $username,
password: $password,
database: $dbname );

if ($mysqli->connect_errno){
    die("Erro de Conexao:" . $mysqli->connect_error);
}

return $mysqli;