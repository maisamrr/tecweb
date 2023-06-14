<?php
if (empty($_POST["nome"])) {
	die("Nome Obrigatorio");
}
if ( ! filter_var($_POST["email-cadastro"],FILTER_VALIDATE_EMAIL)) {
	die("Email nao e valido");
}
if (empty($_POST["matricula"])) {
	die("matricula Obrigatoria");
}
if (strlen($_POST["senha"]) < 8) {
	die("Senha precisa de pelo menos 8 digitos");
}
if ( $_POST["senha"] !== $_POST["senha_confirma"] ) {
	die("Senha diferente");
}

$senha_hash = password_hash($_POST["senha"], PASSWORD_DEFAULT);

$mysqli = require __DIR__ ."/database.php";

$sql = "INSERT INTO usuario (nome,email_cadastro, senha_hash, matricula)
	VALUES (?,?,?,?)";
$STMT = $mysqli->stmt_init();

if (! $STMT->prepare($sql)){
	die("SQL Erro:" . $mysqli->error);
}

$STMT->bind_param("sssi",
	$_POST["nome"],
	$_POST["email-cadastro"],
	$senha_hash,
	$_POST["matricula"]);

$STMT->execute();

echo "foi";
