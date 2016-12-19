<?php


if(isset($_POST['button'],$_POST['email'],$_POST['name'],$_POST['phone'],$_POST['date'],$_POST['services'])){
	$to      = 'virmarina@ukr.net';
	$subject = 'Запись на макияж';
	$message = '<h3>Оставлена заявка на сайте на макияж</h3>';
	$message .= '<h4>Имя: '.$_POST['name'].'</h4>';
	$message .= '<h4>E-mail: '.$_POST['email'].'</h4>';
	$message .= '<h4>Телефон: '.$_POST['phone'].'</h4>';
	$message .= '<h4>Дата: '.$_POST['date'].'</h4>';
	$message .= '<h4>Услуга: '.$_POST['services'].'</h4>';

	if(isset($_POST['comments'])){
		$message .= '<h4>Комментарий:'.$_POST['comments'].'</h4>';
	}
	$headers = 'From: info@emsvisage.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
	$headers  .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail($to, $subject, $message, $headers);

header('Location: /?send=success#form');
}else{

header('Location: /?send=error#form');
}
?>